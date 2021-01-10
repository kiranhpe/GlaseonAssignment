import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';

import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{ path: '', component: DashboardComponent,
children: [
  {
    path:'user', component:UserComponent
  },
  {
    path:'dashboard-view', component: DashboardViewComponent
  }
] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
