import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'pages', loadChildren: 'app/uidemo/pages/pages.module#PagesModule' },
  { path: 'account', loadChildren: 'app/account/account.module#AccountModule' },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#NgxAuthModule',
  },
  { path: '', redirectTo: 'account/', pathMatch: 'full' },
  { path: '**', redirectTo: 'reglog/login' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
