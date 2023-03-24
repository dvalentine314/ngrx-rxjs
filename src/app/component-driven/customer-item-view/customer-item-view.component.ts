import { Component, Input } from '@angular/core';
import { CustomerItemViewModel } from '../../viewModels/customerViewModels';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item-view.component.html',
  styleUrls: ['./customer-item-view.component.scss'],
})
export class CustomerItemViewComponent {
  @Input()
  item: CustomerItemViewModel | undefined;
}
