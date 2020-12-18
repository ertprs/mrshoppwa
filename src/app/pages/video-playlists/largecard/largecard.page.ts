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
import { MenuController } from '@ionic/angular';
import { environment } from '@env/environment';

@Component({
  selector: 'app-largecard',
  templateUrl: './largecard.page.html',
  styleUrls: ['./largecard.page.scss'],
})
export class LargecardPage implements OnInit {
  public gridImages: Array<any>;
  public playVideo: number;

  constructor(
    public sanitizer: DomSanitizer,
    private menuCtrl: MenuController
  ) {
    this.gridImages = environment.YOUTUBE_LARGE_CARD;
  }

  ngOnInit() {
  }
  public play(id) {
    this.playVideo = id;
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }

}
