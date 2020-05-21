import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypeImageComponent } from './pokemon-type-image.component';

describe('PokemonTypeImageComponent', () => {
  let component: PokemonTypeImageComponent;
  let fixture: ComponentFixture<PokemonTypeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonTypeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTypeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
