import { ModuleWithProviders, NgModule } from '@angular/core';
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
  TeambuilderStatisticsService, TeambuilderLoggingService
} from './services';
import { TeamResolver } from './guards';
import { EntityResolver } from './guards/entity-resolver/EntityResolver';

@NgModule({
  exports: [
    TeambuilderComponentsModule,
    TeambuilderDirectivesModule,
    TeambuilderPipesModule
  ]
})
export class TeambuilderCoreModule {

  static forRoot(): ModuleWithProviders {
    return ({
      ngModule: TeambuilderCoreModule,
      providers: [
        TeambuilderStoreService,
        TeambuilderPokemonService,
        TeambuilderViewService,
        TeambuilderLanguageService,
        TeambuilderApiService,
        TeambuilderEventService,
        TeambuilderStatisticsService,
        TeambuilderLoggingService,
        TeamResolver,
        EntityResolver
      ],
    });
  }

  static forChild(): ModuleWithProviders {
    return ({
      ngModule: TeambuilderCoreModule,
    })
  }

}
