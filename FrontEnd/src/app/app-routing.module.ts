import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivateChild : [AuthGuard]
  },
  {
    path:'login', component: LoginComponent
  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
