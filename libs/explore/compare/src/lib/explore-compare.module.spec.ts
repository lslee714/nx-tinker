import { async, TestBed } from '@angular/core/testing';
import { ExploreCompareModule } from './explore-compare.module';

describe('ExploreCompareModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExploreCompareModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExploreCompareModule).toBeDefined();
  });
});
