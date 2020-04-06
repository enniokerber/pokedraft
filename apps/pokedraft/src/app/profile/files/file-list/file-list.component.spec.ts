import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileListComponent } from './file-list.component';
import {PokedraftStorageService, PokedraftStorageServiceStub} from "@pokedraft/core";
import {RouterTestingModule} from "@angular/router/testing";
import {PokedraftUIModule} from "@pokedraft/material";

describe('FileListComponent', () => {
  let component: FileListComponent;
  let fixture: ComponentFixture<FileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileListComponent ],
      imports: [ RouterTestingModule, PokedraftUIModule ],
      providers: [ {provide: PokedraftStorageService, useValue: PokedraftStorageServiceStub} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
