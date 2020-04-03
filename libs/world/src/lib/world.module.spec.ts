import { async, TestBed } from '@angular/core/testing';
import { WorldModule } from './world.module';

describe('WorldModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WorldModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WorldModule).toBeDefined();
  });
});
