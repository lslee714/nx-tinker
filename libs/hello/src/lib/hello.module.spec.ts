import { async, TestBed } from '@angular/core/testing';
import { HelloModule } from './hello.module';

describe('HelloModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HelloModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HelloModule).toBeDefined();
  });
});
