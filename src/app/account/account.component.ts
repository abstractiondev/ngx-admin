import {Component, OnInit} from '@angular/core';

import { MENU_ITEMS } from './account-menu';
import {AppComponent} from '../app.component';

@Component({
  selector: 'ngx-account',
  styleUrls: ['../uidemo/pages/pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class AccountComponent implements OnInit {
  constructor(public myApp: AppComponent) {

  }
  menu = MENU_ITEMS;
  ngOnInit(): void {
    this.myApp.setTitle('Account Title Test 2');
  }
}
