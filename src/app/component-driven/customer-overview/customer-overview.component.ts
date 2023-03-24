import { Component } from '@angular/core';
import { MockCustomerManagementService } from '../../resource-access/mock-customer-management.service';
import { Customer } from '../../resource-access/customerResourceModels';
import { CustomerVisitViewModel } from '../../viewModels/customerViewModels';

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
      this.customerVisits = customerVisits.map((z) => {
        return {
          id: z.id,
          title: z.title,
          transactions: z.transactions.map((y) => {
            return {
              title: y.title,
              items: y.items.map((x) => {
                return {
                  name: x.name,
                  amount: x.amount,
                  price: x.price,
                  total: x.amount * x.price,
                };
              }),
            };
          }),
        };
      });
    });
  }
}
