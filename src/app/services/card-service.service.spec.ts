/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardServiceService } from './card-service.service';

describe('CardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardServiceService]
    });
  });

  it('should ...', inject([CardServiceService], (service: CardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
