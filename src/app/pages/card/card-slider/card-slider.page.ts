/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { CardService } from '@app/services/card/card.service';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.page.html',
  styleUrls: ['./card-slider.page.scss'],
})
export class CardSliderPage implements OnInit {
  public cardData: Array<any>;

  constructor(public cardServ: CardService) {
    this.cardData = this.cardServ.cardData;
  }

  ngOnInit() {
  }

}
