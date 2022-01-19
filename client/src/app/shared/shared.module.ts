import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgOtpInputModule } from 'ng-otp-input';
import { NgSelectModule } from '@ng-select/ng-select';
import { StrategyPipe } from './pipes/strategies.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    NgSelectModule,
    HttpClientModule,
    // FileUploadModule,
  ],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    NgSelectModule,
    HttpClientModule,
    // FileUploadModule,
    StrategyPipe,
  ],
})
export class SharedModule {}
