import {AfterViewInit, Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {TeambuilderViewService} from '../../services/teambuilder/view/teambuilder-view.service';
import {Language} from '../../data/teambuilder/language';

@Directive({
  selector: '[translatableTitle]'
})
export class TranslatableTitleDirective implements AfterViewInit, OnDestroy {

  @Input() set englishTitle(englishTitle: string) {
    this._englishTitle = englishTitle;
  }

  @Input() set germanTitle(germanTitle: string) {
    this._germanTitle = germanTitle;
  }

  _englishTitle: string;

  _germanTitle: string;

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
      case Language.GERMAN:
        this.setContent(this._germanTitle);
        break;
      default:
        this.setContent(this._englishTitle);
    }
  }

  setContent(content: string) {
    if (content) {
      this.elem.nativeElement.setAttribute('title', content);
    } else {
      console.log('There is no content to use for translation.');
    }
  }

}
