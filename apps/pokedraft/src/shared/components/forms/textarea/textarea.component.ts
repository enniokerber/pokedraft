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
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'pd-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @ViewChild('textareaElement') element: ElementRef;

  @Input() value: string;

  @Input() type = 'text';

  @Input() maxlength = 500;

  @Input() disabled: boolean;

  @Input() autofocus: boolean;

  @Output() valueChange: EventEmitter<string>;

  constructor() {
    this.value = '';
    this.disabled = false;
    this.autofocus = false;
    this.valueChange = new EventEmitter<string>();
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.autofocus) {
      this.element.nativeElement.focus();
    }
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
