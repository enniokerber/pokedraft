import {Component, Input, OnInit} from '@angular/core';
import {PopUpAnimation} from "../../../animations/popup.animation";

@Component({
  selector: 'pd-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
  animations: [
    PopUpAnimation
  ]
})
export class ProfilePictureComponent implements OnInit {

  @Input() src: string;

  @Input() alt: string;

  constructor() {
    this.alt = 'User Profile Picture';
  }

  ngOnInit(): void {
  }

}
