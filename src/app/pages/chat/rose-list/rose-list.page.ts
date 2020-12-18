/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';

@Component({
  selector: 'app-rose-list',
  templateUrl: './rose-list.page.html',
  styleUrls: ['./rose-list.page.scss'],
})
export class RoseListPage implements OnInit {
  public segmentTab: any;
  public chatData: Array<any>;

  constructor(private route: Router) {
    this.segmentTab = 'chat';
    this.chatData = environment.ROSE_CHAT_LIST;
  }

  ngOnInit() {

  }

  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
    console.log(this.segmentTab);
  }

  goforChat(chat) {
    this.route.navigate(['rose', chat]);
  }


}
