/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.page.html',
  styleUrls: ['./whatsapp.page.scss'],
})
export class WhatsappPage implements OnInit {
  public segmentTab: any;
  public chatData: Array<any>;
  public title: boolean;

  constructor() {
    this.title = true;
    this.segmentTab = 'Chats';
    this.chatData = environment.WHATSAPP_CHAT_DATA;
  }

  ngOnInit() {
  }

  segmentChanged(event: any) {

    this.segmentTab = event.detail.value;
    console.log(this.segmentTab);
  }

  toggleSearchTitl() {
    this.title = !this.title;
  }

}
