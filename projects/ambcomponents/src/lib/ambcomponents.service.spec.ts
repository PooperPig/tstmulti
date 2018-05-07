import { TestBed, inject } from '@angular/core/testing';

import { AmbcomponentsService } from './ambcomponents.service';

describe('AmbcomponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmbcomponentsService]
    });
  });

  it('should be created', inject([AmbcomponentsService], (service: AmbcomponentsService) => {
    expect(service).toBeTruthy();
  }));
});
