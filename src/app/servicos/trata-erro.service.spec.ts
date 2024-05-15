import { TestBed } from '@angular/core/testing';

import { TrataErroService } from './trata-erro.service';

describe('TrataErroService', () => {
  let service: TrataErroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrataErroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
