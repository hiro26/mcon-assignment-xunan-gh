import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

@NgModule({
  declarations: [AppComponent, EmployeeDashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
