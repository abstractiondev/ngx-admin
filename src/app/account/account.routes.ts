import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AccountComponent} from './account.component';

export const  ACCOUNT_ROUTES: Routes = [
  {
    path: '',
    component: AccountComponent,
    // redirectTo: 'home',
    // pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(ACCOUNT_ROUTES)],
  exports: [RouterModule],
})
export class AccountRoutingModule {
}
