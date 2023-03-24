import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerVisitViewComponent } from '../customer-visit-view/customer-visit-view.component';
import { CustomerOverviewComponent } from '../customer-overview/customer-overview.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerItemViewComponent } from '../customer-item-view/customer-item-view.component';
import { CustomerTransactionViewComponent } from '../customer-transaction-view/customer-transaction-view.component';
import { ComponentDrivenComponent } from './component-driven.component';
import { ComponentDrivenRoutingModule } from './component-driven-routing.module';

@NgModule({
  declarations: [
    CustomerTransactionViewComponent,
    CustomerItemViewComponent,
    CustomerDetailsComponent,
    CustomerOverviewComponent,
    CustomerVisitViewComponent,
    ComponentDrivenComponent,
  ],
  imports: [CommonModule, ComponentDrivenRoutingModule],
})
export class ComponentDrivenModule {}
