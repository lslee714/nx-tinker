import { async, TestBed } from '@angular/core/testing';
import { ExploreModule } from './explore.module';

describe('ExploreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExploreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExploreModule).toBeDefined();
  });
});
