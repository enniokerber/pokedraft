import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTaskComponent } from './upload-task.component';
import {POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER, POKEDRAFT_STORAGE_SERVICE_STUB_PROVIDER} from "@pokedraft/core";
import {PokedraftUIModule} from "@pokedraft/material";

describe('UploadTaskComponent', () => {
  let component: UploadTaskComponent;
  let fixture: ComponentFixture<UploadTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadTaskComponent ],
      imports: [ PokedraftUIModule ],
      providers: [
        POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER,
        POKEDRAFT_STORAGE_SERVICE_STUB_PROVIDER
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
