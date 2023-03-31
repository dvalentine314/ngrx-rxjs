import { Component, Input } from '@angular/core';
import { Customer } from '../../../resource-access/customerResourceModels';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent {
  @Input()
  customer!: Customer;
}
