import { async, TestBed } from '@angular/core/testing';
import { UnrelatedModule } from './unrelated.module';

describe('UnrelatedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UnrelatedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UnrelatedModule).toBeDefined();
  });
});
