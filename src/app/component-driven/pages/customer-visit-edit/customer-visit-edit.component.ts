import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MockCustomerManagementService } from 'src/app/resource-access/mock-customer-management.service';
import { mapCustomerVisitToViewModel } from 'src/app/component-driven/pages/customer-visit-edit/translation';
import { CustomerVisitEditViewModel } from './customer-edit-ViewModel';

@Component({
  selector: 'app-customer-visit-edit',
  templateUrl: './customer-visit-edit.component.html',
  styleUrls: ['./customer-visit-edit.component.scss'],
})
export class CustomerVisitEditComponent {
  constructor(
    private route: ActivatedRoute,
    private service: MockCustomerManagementService,
    private router: Router
  ) {}
  customerVisit: CustomerVisitEditViewModel | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getCustomerVisit(+id).subscribe((customerVisit) => {
        if (customerVisit) {
          this.customerVisit = mapCustomerVisitToViewModel(customerVisit);
        }
      });
    }
  }

  save() {
    if (this.customerVisit) {
      this.service.updateCustomerVisit(this.customerVisit).subscribe((z) => {
        this.router.navigate(['component-driven/customer-overview']);
      });
    }
  }
}
