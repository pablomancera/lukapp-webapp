import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';

import { LukappComponent } from './lukapp/lukapp.component';
import { LukappDashboardComponent } from './lukapp-dashboard/lukapp-dashboard.component';
import { LukappExpensesComponent } from './lukapp-expenses/lukapp-expenses.component';

@NgModule({
  declarations: [AppComponent, LukappComponent, LukappDashboardComponent, LukappExpensesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
