import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {
  IPokemon,
  ITier,
  SORTING_OPTIONS,
  SubscriptionContainer,
  TeambuilderEntityCollection,
  TeambuilderLanguageService,
  TeambuilderPokemonService,
  TeambuilderStoreService,
  TeambuilderViewService
} from "@pokedraft/teambuilder";
import {filter} from "rxjs/operators";

@Component({
  selector: 'pd-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnDestroy, AfterViewInit {

  @ViewChild('pokemonListContainer') pokemonListContainerElement: ElementRef;

  pokemon: TeambuilderEntityCollection<IPokemon>;

  tiers: ITier[];

  showTiers$: Observable<boolean>;

  sortingOptions = SORTING_OPTIONS;

  tierPipeTrigger = false;

  private subscriptions: SubscriptionContainer;

  constructor(private tbStore: TeambuilderStoreService,
              private tbPokemon: TeambuilderPokemonService,
              private tbView: TeambuilderViewService,
              private tbLanguage: TeambuilderLanguageService) {
    this.pokemon = this.tbStore.pokemonlist;
    this.tiers = this.tbStore.tiers;
    this.subscriptions = new SubscriptionContainer(
      this.tbLanguage.language.changes$
        .subscribe(_ => this.tbStore.pokemonlist.sortIfNotSorted(this.tbLanguage.getCurrentLanguageAsProp(), 'name')),
    );
    this.showTiers$ = this.tbView.showTiers.changes$;
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

  sortPokemonByName(deactivateTiers: boolean = false) {
    this.tbStore.pokemonlist.sort(this.tbLanguage.getCurrentLanguageAsProp(), 'name');
    this.sortingSideEffects(deactivateTiers);
  }

  sortPokemonByStat(stat: string, deactivateTiers: boolean = false) {
    this.tbStore.pokemonlist.sort(stat, 'stats');
    this.sortingSideEffects(deactivateTiers);
  }

  sortingSideEffects(deactivateTiers: boolean = false) {
    this.scrollTop();
    this.triggerTierPipe();
    this.tbView.showTiers.update(!deactivateTiers);
  }

  scrollTop() {
    this.pokemonListContainerElement.nativeElement.scrollTop = 0;
  }

  triggerTierPipe() {
    this.tierPipeTrigger = !this.tierPipeTrigger;
  }

}
