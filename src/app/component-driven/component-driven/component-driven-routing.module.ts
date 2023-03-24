import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDrivenComponent } from './component-driven.component';
import { CustomerOverviewComponent } from '../customer-overview/customer-overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'component-driven', pathMatch: 'full' },
  {
    path: 'component-driven',
    component: ComponentDrivenComponent,
    children: [
      { path: '', redirectTo: 'customer-overview', pathMatch: 'full' },
      { path: 'customer-overview', component: CustomerOverviewComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentDrivenRoutingModule {}
