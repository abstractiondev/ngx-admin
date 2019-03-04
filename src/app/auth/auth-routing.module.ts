import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NbAuthComponent, NbLogoutComponent} from '@nebular/auth';
import {NgxLoginComponent} from './login/login.component';
import {NgxRegisterComponent} from './register/register.component';
import {NgxResetPasswordComponent} from './reset-password/reset-password.component';
import {NgxRequestPasswordComponent} from './request-password/request-password.component';

export const routes: Routes = [
  // .. here goes our components routes
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: NgxLoginComponent,
      },
      {
        path: 'register',
        component: NgxRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'reset-password',
        component: NgxResetPasswordComponent,
      },
      {
        path: 'request-password',
        component: NgxRequestPasswordComponent,
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
