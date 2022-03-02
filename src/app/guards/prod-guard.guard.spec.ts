import { TestBed } from '@angular/core/testing';

import { ProdGuardGuard } from './prod-guard.guard';

describe('ProdGuardGuard', () => {
  let guard: ProdGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProdGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
