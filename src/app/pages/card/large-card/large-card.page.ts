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
  selector: 'app-large-card',
  templateUrl: './large-card.page.html',
  styleUrls: ['./large-card.page.scss'],
})
export class LargeCardPage implements OnInit {
  public events: Array<any>;

  constructor(public cardServ: CardService) {
    this.events = this.cardServ.allothers[0].data;
  }

  ngOnInit() {
  }

}
