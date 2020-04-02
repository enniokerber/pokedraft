import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from "./profile.component";
import {LeaguesComponent} from "./leagues/leagues.component";
import {AccountComponent} from "./account/account.component";
import {FilesComponent} from "./files/files.component";
import {FileUploadComponent} from "./files/file-upload/file-upload.component";
import {FileListComponent} from "./files/file-list/file-list.component";
import {UsersLeaguesComponent} from "./leagues/users-leagues/users-leagues.component";
import {CreateLeagueComponent} from "./leagues/create-league/create-league.component";
import {HallOfFameComponent} from "./hall-of-fame/hall-of-fame.component";
import {EnterLeagueComponent} from "./leagues/enter-league/enter-league.component";
import {MessagesComponent} from "./messages/messages.component";


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'achievements',
        component: HallOfFameComponent
      },
      {
        path: 'leagues',
        component: LeaguesComponent,
        children: [
          {
            path: '',
            component: UsersLeaguesComponent
          },
          {
            path: 'create',
            component: CreateLeagueComponent
          },
          {
            path: 'enter',
            component: EnterLeagueComponent
          },
          {
            path: 'enter/:id',
            component: EnterLeagueComponent
          },
          {
            path: '*',
            redirectTo: '',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'files',
        component: FilesComponent,
        children: [
          {
            path: '',
            component: FileListComponent
          },
          {
            path: 'upload',
            component: FileUploadComponent
          },
          {
            path: '*',
            redirectTo: '',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
      },
      {
        path: '*',
        redirectTo: 'account',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '*',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
