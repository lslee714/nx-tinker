import { async, TestBed } from '@angular/core/testing';
import { ExploreDatasetModule } from './explore-dataset.module';

describe('ExploreDatasetModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExploreDatasetModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExploreDatasetModule).toBeDefined();
  });
});
