import { TestBed } from '@angular/core/testing';

import { GeraExcelService } from './gera-excel.service';

describe('GeraExcelService', () => {
  let service: GeraExcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeraExcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
