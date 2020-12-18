/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.page.html',
  styleUrls: ['./view-video.page.scss'],
})
export class ViewVideoPage implements OnInit {
  public videourl: any;

  constructor(
    public modalCtrl: ModalController,
    public navParms: NavParams,
    public sanitizer: DomSanitizer,
  ) {
    console.log(' this.navParms', this.navParms.data.url);
    this.videourl = this.navParms.data.url;
    console.log(this.videourl);
  }

  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

}
