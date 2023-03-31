import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerOverviewComponent } from './component-driven/pages/customer-overview/customer-overview.component';

const routes: Routes = [{ path: '', redirectTo: 'component-driven', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
