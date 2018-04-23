import { TestBed, inject } from '@angular/core/testing';

import { AuthTestService } from './auth-test.service';

describe('AuthTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthTestService]
    });
  });

  it('should be created', inject([AuthTestService], (service: AuthTestService) => {
    expect(service).toBeTruthy();
  }));
});
