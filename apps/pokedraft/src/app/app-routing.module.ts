import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import {ProfileModule} from "./profile/profile.module";
import {AuthGuard} from "../shared/guards/auth/auth.guard";
import {TrySignInComponent} from "./try-sign-in/try-sign-in.component";

const routes: Route[] = [
  {
    path: 'gate',
    component: TrySignInComponent
  },
  {
    path: 'home',
    loadChildren: () => HomeModule
  },
  {
    path: 'profile',
    loadChildren: () => ProfileModule,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'gate',
    pathMatch: 'full'
  },
  {
    path: '*',
    redirectTo: 'gate',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
