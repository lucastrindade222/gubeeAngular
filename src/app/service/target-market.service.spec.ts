import { TestBed } from '@angular/core/testing';

import { TargetMarketService } from './target-market.service';

describe('TargetMarketService', () => {
  let service: TargetMarketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TargetMarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
