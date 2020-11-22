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

  @Input() loading: boolean;

  @Output() leftclick: EventEmitter<void>;

  @Output() rightclick: EventEmitter<void>;

  constructor() {
    this.title = '';
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
