import { TestBed } from '@angular/core/testing';

import { PortDataService } from './port-data.service';

describe('PortDataService', () => {
  let service: PortDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
