import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerItemEditViewModel } from '../../pages/customer-visit-edit/customer-edit-ViewModel';

@Component({
  selector: 'app-customer-item-edit',
  templateUrl: './customer-item-edit.component.html',
  styleUrls: ['./customer-item-edit.component.scss'],
})
export class CustomerItemEditComponent {
  @Input()
  item!: CustomerItemEditViewModel;
  @Output()
  totalChanged = new EventEmitter<number>();

  priceChanged(price: number) {
    this.item.price = price;
    this.item.total = this.item.amount * this.item.price;
    this.totalChanged.emit(this.item.total);
  }

  amountChanged(amount: number) {
    this.item.amount = amount;
    this.item.total = this.item.amount * this.item.price;
    this.totalChanged.emit(this.item.total);
  }
}
