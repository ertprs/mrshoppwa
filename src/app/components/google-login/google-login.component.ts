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
import { environment } from '@env/environment';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent implements OnInit {
  @Output() accessToken = new EventEmitter<{ idToken?: string; accessToken?: string; isBrowser?: boolean; }>();
  constructor(
    private platform: Platform,
    private google: GooglePlus
  ) { }

  ngOnInit() { }

  doLogin() {
    let params: any;
    if (this.platform.is('cordova')) {
      if (this.platform.is('android')) {
        params = {
          webClientId: environment.GOOGLE_WEBCLIENTID, //  webclientID 'string'
          offline: true
        };
      } else {
        params = {};
      }
      this.google.login(params)
        .then((response) => {
          const { idToken, accessToken } = response;
          this.accessToken.next({ idToken, accessToken });
          console.log(response.token);
        }).catch((error) => {
          console.log(error);
          alert('error:' + JSON.stringify(error));
        });
    } else {
      this.accessToken.next({ isBrowser: true });
    }
  }

}
