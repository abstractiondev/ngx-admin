import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import {NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
} from '@nebular/theme';
import { NgxLoginComponent } from './login/login.component';
import { NgxRegisterComponent } from './register/register.component';
import { NgxResetPasswordComponent } from './reset-password/reset-password.component';
import { NgxRequestPasswordComponent } from './request-password/request-password.component';
import {environment} from '../../environments/environment';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,

    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: environment.baseServiceUrl,
          login: {
            endpoint: '/login/Login',
            method: 'post',
          },
          register: {
            endpoint: '/login/Register',
            method: 'post',
          },
          logout: {
            endpoint: '/login/Logout',
            method: 'post',
          },
          requestPass: {
            endpoint: '/login/RequestPassword',
            method: 'post',
          },
          resetPass: {
            endpoint: '/login/ResetPassword',
            method: 'post',
          },
        }),
      ],
    }),
  ],
  declarations: [
    // ... here goes our new components
    NgxLoginComponent,
    NgxRegisterComponent,
    NgxResetPasswordComponent,
    NgxRequestPasswordComponent,
    ],
})
export class NgxAuthModule {
}
