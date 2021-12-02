import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LukappDashboardComponent } from "src/app/lukapp-dashboard/lukapp-dashboard.component";
import { LukappExpensesComponent } from "src/app/lukapp-expenses/lukapp-expenses.component";

const routes: Routes = [
  { path: 'dashboard', component: LukappDashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'expenses', component: LukappExpensesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
