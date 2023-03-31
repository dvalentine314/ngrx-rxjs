import { Component, Input } from '@angular/core';
import { CustomerTransactionEditViewModel } from '../../pages/customer-visit-edit/customer-edit-ViewModel';

@Component({
  selector: 'app-customer-transaction-edit',
  templateUrl: './customer-transaction-edit.component.html',
  styleUrls: ['./customer-transaction-edit.component.scss'],
})
export class CustomerTransactionEditComponent {
  @Input() transaction!: CustomerTransactionEditViewModel;
  updateSubtotal() {
    this.transaction.total = this.transaction.items.reduce(
      (acc, item) => acc + item.total,
      0
    );
  }
}
