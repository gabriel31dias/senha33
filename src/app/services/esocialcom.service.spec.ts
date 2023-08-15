import { TestBed } from '@angular/core/testing';

import { EsocialcomService } from './esocialcom.service';

describe('EsocialcomService', () => {
  let service: EsocialcomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsocialcomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
