import {AfterViewInit, Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {TeambuilderViewService} from '../../services/teambuilder/view/teambuilder-view.service';
import {Language} from '../../data/teambuilder/language';

@Directive({
  selector: '[translatable]'
})
export class TranslatableDirective implements AfterViewInit, OnDestroy {

  @Input() english: string;

  @Input() german: string;

  @Input() french: string;

  private subscription: Subscription;

  constructor(private elem: ElementRef,
              private tbView: TeambuilderViewService) {
  }

  ngAfterViewInit(): void {
    this.subscription = this.tbView.language.observer$.subscribe((language) => {
      this.update(language);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  update(language: Language) {
    switch (language) {
      case Language.GERMAN: this.setContent(this.german); break;
      case Language.FRENCH: this.setContent(this.french); break;
      default: this.setContent(this.english);
    }
  }

  setContent(content: string) {
    if (content) {
      this.elem.nativeElement.innerHTML = content;
    } else {
      console.log('There is no content to use for translation.');
    }
  }


}
