import { Component, Input } from '@angular/core';
import { CustomerTransactionViewModel } from '../../viewModels/customerViewModels';

@Component({
  selector: 'app-customer-transaction',
  templateUrl: './customer-transaction-view.component.html',
  styleUrls: ['./customer-transaction-view.component.scss'],
})
export class CustomerTransactionViewComponent {
  @Input() transaction!: CustomerTransactionViewModel;
}
