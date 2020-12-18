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
  selector: 'app-pastry',
  templateUrl: './pastry.page.html',
  styleUrls: ['./pastry.page.scss'],
})
export class PastryPage implements OnInit {
  public segmentTab: any;
  public chatData: Array<any>;

  constructor(public route: Router) {
    this.segmentTab = 'chat';
    this.chatData = environment.PASTRY_CHAT_LIST;
  }

  ngOnInit() {

  }
  segmentChanged(event: any) {
    console.log('sjkksaksj', event);
    this.segmentTab = event.detail.value;
    console.log('sjkksaksj', this.segmentTab);
  }
  goforChat(chat) {
    this.route.navigate(['bubble', chat]);
  }

}
