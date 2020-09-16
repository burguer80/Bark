import { TestBed } from '@angular/core/testing';

import { PwtDataService } from './pwt-data.service';

describe('PwtDataService', () => {
  let service: PwtDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwtDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
