import { NgModule } from '@angular/core';
import {AccountComponent} from './account.component';
import {AccountRoutingModule} from './account.routes';
import {ThemeModule} from '../@theme/theme.module';
import {DashboardModule} from '../uidemo/pages/dashboard/dashboard.module';
import {ECommerceModule} from '../uidemo/pages/e-commerce/e-commerce.module';
import {MiscellaneousModule} from '../uidemo/pages/miscellaneous/miscellaneous.module';



const ACCOUNT_COMPONENTS = [
  AccountComponent,
];

@NgModule({
  imports: [
    AccountRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...ACCOUNT_COMPONENTS,
  ],
})
export class AccountModule {
}
