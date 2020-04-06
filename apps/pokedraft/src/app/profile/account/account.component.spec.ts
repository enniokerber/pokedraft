import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import {ChooseFileComponent} from "../files/choose-file/choose-file.component";
import {PokedraftUIModule} from "@pokedraft/material";
import {PokedraftAuthServiceStub, PokedraftAuthService} from "@pokedraft/core";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [ AccountComponent, ChooseFileComponent ],
    imports: [ PokedraftUIModule, NoopAnimationsModule ],
    providers: [
      {provide: PokedraftAuthService, useValue: PokedraftAuthServiceStub}
    ]
  })
    .compileComponents();
}));

beforeEach(() => {
  fixture = TestBed.createComponent(AccountComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
