/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-map-direction',
  templateUrl: './map-direction.page.html',
  styleUrls: ['./map-direction.page.scss'],
})
export class MapDirectionPage implements OnInit {
  public origin: any;
  public destination: any;

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController,
  ) { }


  ngOnInit() {
    console.log('params', this.navParams.data);
    this.origin = this.navParams.data.origin;
    this.destination = this.navParams.data.destination;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
