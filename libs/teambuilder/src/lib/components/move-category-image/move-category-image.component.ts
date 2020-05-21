import {Component, Input, OnInit} from '@angular/core';
import {MoveCategory} from "../../models";

@Component({
  selector: 'move-category-image',
  templateUrl: './move-category-image.component.html',
  styleUrls: ['./move-category-image.component.scss']
})
export class MoveCategoryImageComponent implements OnInit {

  _category: string = MoveCategory.STATUS;

  @Input() set category(category: string) {
    this._category = category.toLowerCase();
  }

  constructor() { }

  ngOnInit() {
  }

}
