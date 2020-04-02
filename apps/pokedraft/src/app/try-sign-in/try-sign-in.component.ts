import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'pd-try-sign-in',
  templateUrl: './try-sign-in.component.html',
  styleUrls: ['./try-sign-in.component.scss']
})
export class TrySignInComponent {
  constructor(router: Router) {
    router.navigateByUrl('profile/leagues');
  }
}
