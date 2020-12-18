
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
  selector: 'app-event-card',
  templateUrl: './event-card.page.html',
  styleUrls: ['./event-card.page.scss'],
})
export class EventCardPage implements OnInit {
  public events: Array<any>;

  constructor(public cardServ: CardService) {
    this.events = this.cardServ.allothers[0].data;
  }

  ngOnInit() {
  }

}
