import { NgModule } from '@angular/core';
import {TeambuilderDirectivesModule} from "./directives/teambuilder-directives.module";
import {TeambuilderPipesModule} from "./pipes/teambuilder-pipes.module";

@NgModule({
  exports: [
    TeambuilderDirectivesModule,
    TeambuilderPipesModule
  ]
})
export class TeambuilderModule {}
