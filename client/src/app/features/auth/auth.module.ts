import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CoreModule } from 'src/app/core/core.module';
import { OtpComponent } from './otp/otp.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    OtpComponent,
    ForgotComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class AuthModule { }
