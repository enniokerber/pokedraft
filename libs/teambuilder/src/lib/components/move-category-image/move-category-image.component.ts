import {Component, Input} from '@angular/core';
import {MoveCategory} from "../../models";

@Component({
  selector: 'move-category-image',
  templateUrl: './move-category-image.component.html',
  styleUrls: ['./move-category-image.component.scss']
})
export class MoveCategoryImageComponent {

  _category: string = MoveCategory.STATUS;

  @Input() set category(category: string) {
    this._category = category.toLowerCase();
  }

  constructor() { }

}
