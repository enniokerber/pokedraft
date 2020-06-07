import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {
  IPokemon,
  ITier,
  Language,
  Languages,
  SORTING_OPTIONS,
  SubscriptionContainer,
  TeambuilderEntityCollection,
  TeambuilderLanguageService,
  TeambuilderPokemonService,
  TeambuilderStoreService,
  TeambuilderViewService
} from "@pokedraft/teambuilder";
import {distinctUntilChanged, filter} from "rxjs/operators";

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('pokemonListContainer') pokemonListContainerElement: ElementRef;

  pokemon: TeambuilderEntityCollection<IPokemon>;

  tiers: ITier[];

  language: Language = Languages.ENGLISH;

  showTiers$: Observable<boolean>;

  sortingOptions = SORTING_OPTIONS;

  GERMAN_LANGUAGE = Languages.GERMAN;

  tierPipeTrigger = false;

  private subscriptions: SubscriptionContainer;

  constructor(private tbStore: TeambuilderStoreService,
              private tbPokemon: TeambuilderPokemonService,
              private tbView: TeambuilderViewService,
              private tbLanguage: TeambuilderLanguageService) {
    this.pokemon = this.tbStore.pokemonlist;
    this.tiers = this.tbStore.tiers;
    this.subscriptions = new SubscriptionContainer(
      this.tbLanguage.language.changes$.pipe(distinctUntilChanged()).subscribe(
        (language) => {
          this.tbStore.sortPokemonIfNotSorted(this.tbLanguage.getCurrentLanguageAsProp(), 'name');
          this.language = language;
        }
      ),
    );
    this.showTiers$ = this.tbView.showTiers.changes$.pipe(distinctUntilChanged());
  }

  ngOnInit() {
    const pkmn = this.pokemon.current[0];
    this.choosePokemon(pkmn);
  }

  ngAfterViewInit(): void {
    this.subscriptions.add(
      this.tbView.displayMode.changes$
        .pipe(filter(dm => dm && dm.showPokemonList === true))
        .subscribe(_ => this.scrollTop()),
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribeAll();
  }

  choosePokemon(pokemon: IPokemon): void {
    this.tbPokemon.addTeampokemon(pokemon);
  }

  sortPokemonlist(sortBy: string, isStat = false): void {
    this.tbView.showTiers.update(true);
    this.tbStore.sortPokemon(sortBy, (isStat ? 'stats' : ''));
    this.sortingSideEffects();
  }

  sortPokemonlistByStat(stat: string): void {
    this.sortPokemonlist(stat, true);
  }

  sortListAndDeactivateTierSeparation(sortBy: string, event: MouseEvent, isStat = false) {
    event.preventDefault();
    this.sortPokemonlist(sortBy, isStat);
    this.tbView.showTiers.update(false);
  }

  sortingSideEffects() {
    this.scrollTop();
    this.triggerTierPipe();
  }

  scrollTop() {
    this.pokemonListContainerElement.nativeElement.scrollTop = 0;
  }

  triggerTierPipe() {
    this.tierPipeTrigger = !this.tierPipeTrigger;
  }

}
