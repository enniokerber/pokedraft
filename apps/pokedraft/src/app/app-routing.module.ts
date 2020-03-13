import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

const routes: Route[] = [
  {
    path: 'home',
    loadChildren: () => HomeModule
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '*',
    redirectTo: 'home',
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
