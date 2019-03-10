import {Component, OnInit} from '@angular/core';
import {NbLoginComponent} from '@nebular/auth';
import {environment} from '../../../environments/environment';

const socialLinks = [
  {
    url: environment.baseServiceUrl + '/Login/ExternalLogin?provider=Facebook',
    target: '_blank',
    icon: 'socicon-facebook',
  },
  {
    url: environment.baseServiceUrl + '/Login/ExternalLogin?provider=Google&returnUrl=/auth/account/',
    target: '_blank',
    icon: 'socicon-google',
  },
];

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class NgxLoginComponent extends NbLoginComponent implements OnInit {
  ngOnInit(): void {
    this.socialLinks = socialLinks;
  }
}


