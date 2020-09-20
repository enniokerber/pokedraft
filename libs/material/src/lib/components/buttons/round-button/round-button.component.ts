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

  @Output() leftclick: EventEmitter<void>;

  @Output() rightclick: EventEmitter<void>;

  constructor() {
    this.title = '';
    this.disabled = false;
    this.active = false;
    this.leftclick = new EventEmitter<void>();
    this.rightclick = new EventEmitter<void>();
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
