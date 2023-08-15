import { TestBed } from '@angular/core/testing';

import { OldToastService } from './old-toast.service';

describe('OldToastService', () => {
  let service: OldToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OldToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
