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
  selector: 'app-elegance',
  templateUrl: './elegance.page.html',
  styleUrls: ['./elegance.page.scss'],
})
export class ElegancePage implements OnInit {
  public chatData: Array<any>;
  constructor() { }

  ngOnInit() {
    this.chatData = environment.ELEGANCE_CHAT_LIST;
  }

}
