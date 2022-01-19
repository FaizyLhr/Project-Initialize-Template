import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard.component';
import { DeclairInputComponent } from './declair-input/declair-input.component';
import { DeclairComponent } from './declair/declair.component';
import { EditComponent } from './edit/edit.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'declair',
    component: DeclairComponent
  },
  {
    path: 'declair-input',
    component: DeclairInputComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
