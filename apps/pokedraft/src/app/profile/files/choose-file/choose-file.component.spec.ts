import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFileComponent } from './choose-file.component';
import {PokedraftUIModule} from "@pokedraft/material";
import {PokedraftStorageService, PokedraftStorageServiceStub} from "@pokedraft/core";

describe('ChooseFileComponent', () => {
  let component: ChooseFileComponent;
  let fixture: ComponentFixture<ChooseFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseFileComponent ],
      imports: [ PokedraftUIModule ],
      providers: [ {provide: PokedraftStorageService, useValue: PokedraftStorageServiceStub} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
