import { TestBed } from '@angular/core/testing';

import { PwtService } from './pwt.service';

describe('PwtService', () => {
  let service: PwtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
