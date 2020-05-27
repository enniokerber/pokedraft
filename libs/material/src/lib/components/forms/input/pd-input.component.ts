import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'pd-input',
  templateUrl: './pd-input.component.html',
  styleUrls: ['./pd-input.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PdInputComponent),
      multi: true
    }]
})
export class PdInputComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @ViewChild('inputElement') element: ElementRef;

  @Input() value: string;

  @Input() type = 'text';

  @Input() disabled: boolean;

  @Input() size: 'normal' | 'small' | 'large';

  @Input() animations: 'on' | 'off';

  @Input() autofocus: boolean;

  @Input() maxlength: number;

  @Output() valueChange: EventEmitter<string>;

  @Output() onfocus: EventEmitter<void>;

  @Output() onblur: EventEmitter<void>;

  constructor() {
    this.value = '';
    this.disabled = false;
    this.size = 'normal';
    this.animations = 'on';
    this.autofocus = false;
    this.valueChange = new EventEmitter<string>();
    this.onfocus = new EventEmitter<void>();
    this.onblur = new EventEmitter<void>();
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.autofocus) {
      this.focus();
    }
  }

  focus(): void {
    this.element.nativeElement.focus();
    this.emitFocus();
  }

  changeValue(to: string): void {
    this.valueChange.emit(to);
    this.onChange(to);
  }

  onChange: any = (_: any) => {};
  onTouch: any = (_: any) => {};

  registerOnChange(fn: any): void {
    if (typeof fn === 'function') {
      this.onChange = fn;
    }
  }

  registerOnTouched(fn: any): void {
    if (typeof fn === 'function') {
      this.onTouch = fn;
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    if (typeof value !== 'undefined') {
      this.value = value;
    }
  }

  emitBlur() {
    this.onblur.emit();
  }

  emitFocus() {
    this.onfocus.emit();
  }
}
