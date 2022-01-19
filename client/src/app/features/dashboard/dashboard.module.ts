import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { WeekDaySelectorModule } from 'week-day-selector';
import { DeclairComponent } from './declair/declair.component';
import { DeclairInputComponent } from './declair-input/declair-input.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddComponent,
    EditComponent,
    AccountComponent,
    ProfileComponent,
    DeclairComponent,
    DeclairInputComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    WeekDaySelectorModule,
  ],
})
export class DashboardModule {}
