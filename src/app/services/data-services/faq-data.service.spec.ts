import { TestBed } from '@angular/core/testing';

import { FaqDataService } from './faq-data.service';

describe('FaqDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaqDataService = TestBed.get(FaqDataService);
    expect(service).toBeTruthy();
  });
});
