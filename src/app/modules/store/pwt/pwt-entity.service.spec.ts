import { TestBed } from '@angular/core/testing';

import { PwtEntityService } from './pwt-entity.service';

describe('PwtEntityService', () => {
  let service: PwtEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwtEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
