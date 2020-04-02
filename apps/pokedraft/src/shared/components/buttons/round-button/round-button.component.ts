import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'pd-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss']
})
export class RoundButtonComponent {

  @Input() title: string;

  @Input() icon: string;

  @Input() alt: string;

  @Input() disabled: boolean;

  @Input() active: boolean;

  @Input() red: boolean;

  @Output() leftclick: EventEmitter<{}>;

  @Output() rightclick: EventEmitter<{}>;

  constructor() {
    this.title = '';
    this.disabled = false;
    this.active = false;
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
