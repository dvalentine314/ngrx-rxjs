import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentDrivenModule } from './component-driven/component-driven.module';
import { CustomerVisitEditComponent } from './component-driven/pages/customer-visit-edit/customer-visit-edit.component';
import { CustomerTransactionEditComponent } from './component-driven/forms/customer-transaction-edit/customer-transaction-edit.component';
import { CustomerItemEditComponent } from './component-driven/forms/customer-item-edit/customer-item-edit.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentDrivenModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
