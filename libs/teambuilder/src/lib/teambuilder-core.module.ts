import { NgModule } from '@angular/core';
import {TeambuilderDirectivesModule} from "./directives/teambuilder-directives.module";
import {TeambuilderPipesModule} from "./pipes/teambuilder-pipes.module";
import {TeambuilderComponentsModule} from "./components/teambuilder-components.module";
import {
  TeambuilderApiService,
  TeambuilderLanguageService,
  TeambuilderPokemonService,
  TeambuilderViewService,
  TeambuilderEventService,
  TeambuilderStoreService,
  TeambuilderStatisticsService
} from "./services";

@NgModule({
  providers: [
    TeambuilderStoreService,
    TeambuilderPokemonService,
    TeambuilderViewService,
    TeambuilderLanguageService,
    TeambuilderApiService,
    TeambuilderEventService,
    TeambuilderStatisticsService
  ],
  exports: [
    TeambuilderComponentsModule,
    TeambuilderDirectivesModule,
    TeambuilderPipesModule
  ]
})
export class TeambuilderCoreModule {}
