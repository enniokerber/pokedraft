import { async, TestBed } from '@angular/core/testing';
import { TeambuilderCoreModule } from './teambuilder-core.module';

describe('TeambuilderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TeambuilderCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TeambuilderCoreModule).toBeDefined();
  });
});
