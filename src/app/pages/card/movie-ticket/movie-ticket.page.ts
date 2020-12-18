/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardService } from '@app/services/card/card.service';

@Component({
  selector: 'app-movie-ticket',
  templateUrl: './movie-ticket.page.html',
  styleUrls: ['./movie-ticket.page.scss'],
})
export class MovieTicketPage implements OnInit {
  public image: any;
  public movieData: any;

  constructor(
    public modalCtrl: ModalController,
    public cardServ: CardService
  ) {
    this.movieData = this.cardServ.movieData;
  }

  ngOnInit() {
    this.image = 'assets/cards/sliderobot.jpg';
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
