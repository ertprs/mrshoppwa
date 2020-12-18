/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.scss'],
})
export class FacebookLoginComponent implements OnInit {

  @Output() accessToken = new EventEmitter<string>();

  constructor(
    private fb: Facebook,
    private platform: Platform
  ) { }

  ngOnInit() {}

  doLogin() {
    if (this.platform.is('cordova')) {
      this.fb.login(['email'])
        .then((response: FacebookLoginResponse) => {
          this.accessToken.next(response.authResponse.accessToken);
          console.log(response.authResponse.accessToken);
        }).catch((error) => {
          console.log(error);
          alert('error:' + JSON.stringify(error));
        });
    } else {
      this.accessToken.next('browser');
    }
  }

}
