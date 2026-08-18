import { TestBed } from '@angular/core/testing';

import { PDF } from './pdf';

describe('PDF', () => {
  let service: PDF;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PDF);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
