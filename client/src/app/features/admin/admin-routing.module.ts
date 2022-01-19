import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeclairComponent } from './declair/declair.component';
import { LayoutComponent } from './layout/layout.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component:LayoutComponent,
  children: [
    { path: '', component: DashboardComponent},
    { path: 'users', component: UsersComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'declair', component: DeclairComponent},
  ]
},
{ path: 'auth', component: AuthComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
