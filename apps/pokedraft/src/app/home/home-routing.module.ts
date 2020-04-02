import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChooseUsernameComponent } from './choose-username/choose-username.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent,
            data: {
              animation: 'login'
            }
          },
          {
            path: 'signup',
            component: SignupComponent,
            data: {
              animation: 'signup'
            }
          },
          {
            path: 'pickusername',
            component: ChooseUsernameComponent,
            data: {
              animation: 'pickusername'
            }
          },
          {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
          },
          {
            path: '*',
            redirectTo: 'login',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '*',
        redirectTo: '',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
