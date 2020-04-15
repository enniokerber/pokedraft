import { async, TestBed } from '@angular/core/testing';
import { TeambuilderModule } from './teambuilder.module';

describe('TeambuilderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TeambuilderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TeambuilderModule).toBeDefined();
  });
});
