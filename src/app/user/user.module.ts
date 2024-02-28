import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GoogleSigninDirective } from './google-signin.directive';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserRoutingModule } from './user-routing.module';
import { EmailLoginComponent } from './email-login/email-login.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    GoogleSigninDirective,
    EmailLoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
