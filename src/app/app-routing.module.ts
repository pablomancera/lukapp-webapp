import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LukappDashboardComponent } from "src/app/lukapp-dashboard/lukapp-dashboard.component";

const routes: Routes = [
  { path: 'dashboard', component: LukappDashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
