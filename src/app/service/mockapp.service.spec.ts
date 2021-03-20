import { TestBed } from '@angular/core/testing';

import { MockappService } from './mockapp.service';

describe('MockappService', () => {
  let service: MockappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
