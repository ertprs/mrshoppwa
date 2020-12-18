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
  selector: 'app-classic-chatlist',
  templateUrl: './classic-chatlist.page.html',
  styleUrls: ['./classic-chatlist.page.scss'],
})
export class ClassicChatlistPage implements OnInit {
  public segmentTab: any;
  public chatData: Array<any>;
  public title: boolean;

  constructor(public route: Router) {
    this.title = true;
    this.chatData = environment.CLASSIC_CHAT_LIST_DATA;
  }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
    console.log(this.segmentTab);
  }
  goforChat(chat) {
    this.title = true;
    this.route.navigate(['classic', chat]);
  }
  toggleSearchTitl() {
    this.title = !this.title;
  }

}
