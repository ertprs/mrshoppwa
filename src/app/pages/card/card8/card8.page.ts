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
  selector: 'app-card8',
  templateUrl: './card8.page.html',
  styleUrls: ['./card8.page.scss'],
})
export class Card8Page implements OnInit {
  public topSavers: any;

  constructor(public cardServ: CardService) {
    this.topSavers = cardServ.topSaversproduct[0];
  }

  ngOnInit() {
  }

}
