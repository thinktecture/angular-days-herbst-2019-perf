import { TestBed } from '@angular/core/testing';

import { MyPreloadingStrategyService } from './my-preloading-strategy.service';

describe('MyPreloadingStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyPreloadingStrategyService = TestBed.get(MyPreloadingStrategyService);
    expect(service).toBeTruthy();
  });
});
