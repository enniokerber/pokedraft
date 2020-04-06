import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PokedraftConfig} from "../../../../shared/pokedraft.config";
import {BattlePlatform, BattleType, BattleTypeConstants, IPokedraftCreateLeagueDTO, PokedraftLeagueService} from "@pokedraft/core";
import {DocumentReference} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'pd-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.scss']
})
export class CreateLeagueComponent implements OnInit {

  leagueForm: FormGroup;

  logo: string;

  showFilesList: boolean;

  config: any;

  loading$: Observable<boolean>;

  success: boolean;

  platforms: string[] = [
    BattlePlatform.SHOWDOWN,
    BattlePlatform.WIFI,
    BattlePlatform.OTHER
  ];

  battleTypes: BattleType[] = [
    BattleTypeConstants.SINGLES,
    BattleTypeConstants.DOUBLES,
    BattleTypeConstants.TRIPLE,
    BattleTypeConstants.OTHER
  ];

  teammembers: number[] = [6, 5, 4, 3, 2, 1];

  constructor(private fb: FormBuilder,
              private leagueService: PokedraftLeagueService) {
    this.success = false;
    this.config = PokedraftConfig.editor.league;
    this.leagueForm = this.fb.group({
      name: ['Test League - Season T', [
        Validators.required,
        Validators.minLength(this.config.NAME_MINLENGTH),
        Validators.maxLength(this.config.NAME_MAXLENGTH)
      ]],
      abbreviation: ['TSTL ST', [
        Validators.required,
        Validators.minLength(this.config.ABBREVIATION_MINLENGTH),
        Validators.maxLength(this.config.ABBREVIATION_MAXLENGTH)
      ]],
      description: ['A test league for testing.', [Validators.maxLength(this.config.DESCRIPTION_MAXLENGTH)]],
      platform: BattlePlatform.SHOWDOWN,
      battleType: BattleTypeConstants.SINGLES,
      teamMembers: 6,
      participators: [10, [
        Validators.required,
        Validators.min(this.config.PARTICIPATORS_MINCOUNT),
        Validators.max(this.config.PARTICIPATORS_MAXCOUNT)
      ]],
      draftPicks: [11, [
        Validators.required,
        Validators.min(this.config.DRAFTPICKS_MINCOUNT),
        Validators.max(this.config.DRAFTPICKS_MAXCOUNT)
      ]],
      mirror: true,
      speciesClause: true
    });
    this.logo = '';
    this.showFilesList = false;
    this.loading$ = this.leagueService.loading.asObservable();
  }

  ngOnInit(): void {
  }

  get name(): AbstractControl { return this.leagueForm.get('name'); }
  get abbreviation(): AbstractControl { return this.leagueForm.get('abbreviation'); }
  get description(): AbstractControl { return this.leagueForm.get('description'); }
  get platform(): AbstractControl { return this.leagueForm.get('platform'); }
  get battleType(): AbstractControl { return this.leagueForm.get('battleType'); }
  get teamMembers(): AbstractControl { return this.leagueForm.get('teamMembers'); }
  get participators(): AbstractControl { return this.leagueForm.get('participators'); }
  get draftPicks(): AbstractControl { return this.leagueForm.get('draftPicks'); }
  get mirror(): AbstractControl { return this.leagueForm.get('mirror'); }
  get speciesClause(): AbstractControl { return this.leagueForm.get('speciesClause'); }

  setLeagueLogo(url: string): void {
    this.logo = url;
  }

  getLeagueObject(): IPokedraftCreateLeagueDTO {
    return ({
        name: {
          long: this.name.value,
          short: this.abbreviation.value
        },
        description: this.description.value,
        logo: this.logo,
        settings: {
          general: {
            public: true,
            participators: Number(this.participators.value),
            platform: this.platform.value,
            format: {
              battleType: this.battleType.value,
              teamPokemon: Number(this.teamMembers.value)
            }
          },
          draft: {
            picks: Number(this.draftPicks.value),
            mirror: this.mirror.value,
            speciesClause: this.speciesClause.value
          }
        }
      });
  }

  createLeague(): void {
    if (this.leagueForm.valid) {
      const createLeagueDTO = this.getLeagueObject();
      console.log(createLeagueDTO);
      this.leagueService.createLeague(createLeagueDTO)
        .then((ref: DocumentReference) => {
          console.log('Successfully created league!');
          this.success = true;
          const id = ref.id;
          this.leagueService.switchLeague(id);
          ref.update({ id });
        })
        .catch(error => console.error(error));
    }
  }
}
