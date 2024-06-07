import { TestBed } from '@angular/core/testing';

import { LocalLeisureService } from './local-leisure.service';

describe('LocalLeisureService', () => {
  let service: LocalLeisureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalLeisureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
