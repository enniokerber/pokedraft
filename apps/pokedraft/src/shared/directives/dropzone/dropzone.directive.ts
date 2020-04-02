import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[dropzone]'
})
export class DropzoneDirective {

  @Output() dropped: EventEmitter<FileList>;

  @Output() hover: EventEmitter<boolean>;

  constructor() {
    this.dropped = new EventEmitter<FileList>();
    this.hover = new EventEmitter<boolean>();
  }

  @HostListener('drop', [ '$event' ])
  onDrop(event): void {
    event.preventDefault();
    this.dropped.emit(event.dataTransfer.files);
  }

  @HostListener('dragover', [ '$event' ])
  onDragOver(event): void {
    event.preventDefault();
    this.hover.emit(true);
  }

  @HostListener('dragleave', [ '$event' ])
  onDragLeave(event): void {
    event.preventDefault();
    this.hover.emit(false);
  }

}
