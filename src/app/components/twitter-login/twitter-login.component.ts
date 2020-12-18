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
import { TwitterConnect, TwitterConnectResponse } from '@ionic-native/twitter-connect/ngx';

@Component({
  selector: 'twitter-login',
  templateUrl: './twitter-login.component.html',
  styleUrls: ['./twitter-login.component.scss'],
})
export class TwitterLoginComponent implements OnInit {
  @Output() accessToken = new EventEmitter<{ token?: string; secret?: string; isBrowser?: boolean; }>();

  constructor(
    private platform: Platform,
    private twitter: TwitterConnect
  ) { }

  ngOnInit() { }

  doLogin() {
    if (this.platform.is('cordova')) {
      this.twitter.login()
        .then((response: TwitterConnectResponse) => {
          const { token, secret } = response;
          this.accessToken.next({ token, secret });
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
