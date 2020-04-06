import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { LeaguesComponent } from './leagues/leagues.component';
import {LayoutModule} from "../layout/layout.module";
import { ProfileNavbarComponent } from './profile-navbar/profile-navbar.component';
import { AccountComponent } from './account/account.component';
import { FileUploadComponent } from './files/file-upload/file-upload.component';
import { FilesComponent } from './files/files.component';
import { FileListComponent } from './files/file-list/file-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PokedraftDirectivesModule} from "@pokedraft/material";
import { LeagueListComponent } from './leagues/league-list/league-list.component';
import { LeagueContainerComponent } from './leagues/league-list/league-container/league-container.component';
import { UploadTaskComponent } from './files/file-upload/upload-task/upload-task.component';
import { ChooseFileComponent } from './files/choose-file/choose-file.component';
import { UsersLeaguesComponent } from './leagues/users-leagues/users-leagues.component';
import { CreateLeagueComponent } from './leagues/create-league/create-league.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { AchievementComponent } from './hall-of-fame/achievement-list/achievement/achievement.component';
import { EnterLeagueComponent } from './leagues/enter-league/enter-league.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageContainerComponent } from './messages/message-container/message-container.component';
import { AchievementListComponent } from './hall-of-fame/achievement-list/achievement-list.component';
import {PokedraftUIModule} from "@pokedraft/material";
import { AdminToolboxComponent } from './admin-toolbox/admin-toolbox.component';


@NgModule({
  declarations: [ProfileComponent, LeaguesComponent, ProfileNavbarComponent, AccountComponent, FileUploadComponent, FilesComponent, FileListComponent, LeagueListComponent, LeagueContainerComponent, UploadTaskComponent, ChooseFileComponent, UsersLeaguesComponent, CreateLeagueComponent, HallOfFameComponent, AchievementComponent, EnterLeagueComponent, MessagesComponent, MessageContainerComponent, AchievementListComponent, AdminToolboxComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    LayoutModule,
    PokedraftUIModule,
    PokedraftDirectivesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
