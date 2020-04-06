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
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }]
})
export class InputComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @ViewChild('inputElement') element: ElementRef;

  @Input() value: string;

  @Input() type = 'text';

  @Input() disabled: boolean;

  @Input() size: 'normal' | 'small' | 'large';

  @Input() autofocus: boolean;

  @Output() valueChange: EventEmitter<string>;

  constructor() {
    this.value = '';
    this.disabled = false;
    this.size = 'normal';
    this.autofocus = false;
    this.valueChange = new EventEmitter<string>();
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.autofocus) {
      this.focus();
    }
  }

  focus(): void {
    this.element.nativeElement.focus();
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

}
