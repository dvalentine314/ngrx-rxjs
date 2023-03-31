import { Component } from '@angular/core';
import { MockCustomerManagementService } from '../../../resource-access/mock-customer-management.service';
import { Customer } from '../../../resource-access/customerResourceModels';
import { CustomerVisitViewModel } from './customerViewModels';
import { mapCustomerVisitToViewModel } from './translation';

@Component({
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.scss'],
})
export class CustomerOverviewComponent {
  constructor(private service: MockCustomerManagementService) {}
  customer: Customer | undefined;
  customerVisits: Array<CustomerVisitViewModel> | undefined;

  ngOnInit(): void {
    this.service.getCustomer(1).subscribe((customer) => {
      this.customer = customer;
    });

    this.service.getCustomerCustomerVisits(1).subscribe((customerVisits) => {
      this.customerVisits = customerVisits.map(mapCustomerVisitToViewModel);
    });
  }
}
