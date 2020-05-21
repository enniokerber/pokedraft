import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListRowContainerComponent } from './pokemon-list-row-container.component';

describe('PokemonListRowContainerComponent', () => {
  let component: PokemonListRowContainerComponent;
  let fixture: ComponentFixture<PokemonListRowContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListRowContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListRowContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
