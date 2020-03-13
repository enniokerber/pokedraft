import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pd-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() title: string;

  @Input() icon: string;

  @Input() alt: string;

  @Input() disabled: boolean;

  @Output() leftclick: EventEmitter<{}>;

  @Output() rightclick: EventEmitter<{}>;

  constructor() {
    this.title = '';
    this.leftclick = new EventEmitter<{}>();
    this.rightclick = new EventEmitter<{}>();
  }

  emitLeftClick(): void {
    this.leftclick.emit();
  }

  emitRightClick(e): void {
    e.preventDefault();
    e.stopPropagation();
    this.rightclick.emit();
  }

}
