import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentDrivenModule } from './component-driven/component-driven/component-driven.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentDrivenModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
