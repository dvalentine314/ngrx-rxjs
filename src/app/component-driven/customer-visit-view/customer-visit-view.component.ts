import { Component, Input } from '@angular/core';
import { CustomerVisitViewModel } from '../../viewModels/customerViewModels';

@Component({
  selector: 'app-customerVisit-summary',
  templateUrl: './customer-visit-view.component.html',
  styleUrls: ['./customer-visit-view.component.scss'],
})
export class CustomerVisitViewComponent {
  @Input()
  customerVisit: CustomerVisitViewModel | undefined;
}
