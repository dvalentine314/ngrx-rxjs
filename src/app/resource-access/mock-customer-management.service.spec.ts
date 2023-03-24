import { TestBed } from '@angular/core/testing';

import { MockCustomerManagementService as MockCustomerManagementService } from './mock-customer-management.service';

describe('MockCustomerManagementService', () => {
  let service: MockCustomerManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockCustomerManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
