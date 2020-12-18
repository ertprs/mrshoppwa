/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { ViewVideoPage } from '../view-video/view-video.page';
import { environment } from '@env/environment';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-youtube-home-playlist',
  templateUrl: './youtube-home-playlist.page.html',
  styleUrls: ['./youtube-home-playlist.page.scss'],
})
export class YoutubeHomePlaylistPage implements OnInit {
  public gridImages: Array<any>;

  constructor(
    public modalCtrl: ModalController,
    public menuCtrl: MenuController
  ) {
    this.gridImages = environment.YOUTUBE_HOME_PLAYLIST;
  }

  ngOnInit() {
  }

  async viewVideo(videoUrl: any) {
    const modal = await this.modalCtrl.create({
      component: ViewVideoPage,
      componentProps: { url: videoUrl },
      cssClass: 'viewVideoModal'
    });
    return modal.present();
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }

}
