import { TestBed } from '@angular/core/testing';

import { PortEntityService } from './port-entity.service';

describe('PortEntityService', () => {
  let service: PortEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
