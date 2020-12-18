/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { environment } from '@env/environment';

@Component({
  selector: 'app-in-app-browser',
  templateUrl: './in-app-browser.page.html',
  styleUrls: ['./in-app-browser.page.scss'],
})
export class InAppBrowserPage implements OnInit {

  options: InAppBrowserOptions = {
    location: 'yes',
    hidden: 'no',
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes', // Android only ,shows browser zoom controls
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', // Android only
    closebuttoncaption: 'Close', // iOS only
    disallowoverscroll: 'no', // iOS only
    toolbar: 'yes', // iOS only
    enableViewportScale: 'no', // iOS only
    allowInlineMediaPlayback: 'no', //  iOS only
    presentationstyle: 'pagesheet', // iOS only
    fullscreen: 'yes', // Windows only
  };
  public blankUrls: Array<any>;
  public systemUrls: Array<any>;

  constructor(public iab: InAppBrowser) {
    this.blankUrls = environment.INAPP_BORWSER_BLANKURL;
    this.systemUrls = environment.INAPP_BORWSER_BLANKURL;
  }

  ngOnInit() {
  }

  openBlankUrl(url) {
    this.iab.create(url, '_blank', this.options);
  }
  openSystemUrl(url) {
    this.iab.create(url, '_system', this.options);
    // const browser = this.iab.create(url)
    // browser.show();
  }

}
