import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerVisitViewComponent } from './views/customer-visit-view/customer-visit-view.component';
import { CustomerOverviewComponent } from './pages/customer-overview/customer-overview.component';
import { CustomerDetailsComponent } from './views/customer-details/customer-details.component';
import { CustomerItemViewComponent } from './views/customer-item-view/customer-item-view.component';
import { CustomerTransactionViewComponent } from './views/customer-transaction-view/customer-transaction-view.component';
import { ComponentDrivenComponent } from './component-driven.component';
import { ComponentDrivenRoutingModule } from './component-driven-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomerItemEditComponent } from './forms/customer-item-edit/customer-item-edit.component';
import { CustomerTransactionEditComponent } from './forms/customer-transaction-edit/customer-transaction-edit.component';
import { CustomerVisitEditComponent } from './pages/customer-visit-edit/customer-visit-edit.component';

@NgModule({
  declarations: [
    CustomerTransactionViewComponent,
    CustomerItemViewComponent,
    CustomerDetailsComponent,
    CustomerOverviewComponent,
    CustomerVisitViewComponent,
    ComponentDrivenComponent,
    CustomerVisitEditComponent,
    CustomerTransactionEditComponent,
    CustomerItemEditComponent,
  ],
  imports: [CommonModule, ComponentDrivenRoutingModule, FormsModule],
})
export class ComponentDrivenModule {}
