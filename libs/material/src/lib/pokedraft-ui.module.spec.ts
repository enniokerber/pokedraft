import { async, TestBed } from '@angular/core/testing';
import { PokedraftUIModule } from './pokedraft-ui.module';

describe('PokedraftUIModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PokedraftUIModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PokedraftUIModule).toBeDefined();
  });
});
