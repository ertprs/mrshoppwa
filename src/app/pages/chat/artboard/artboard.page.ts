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
  selector: 'app-artboard',
  templateUrl: './artboard.page.html',
  styleUrls: ['./artboard.page.scss'],
})
export class ArtboardPage implements OnInit {
  public chatSegmentType;
  public chatData: Array<any>;
  public userDetails: any;

  constructor() {
    this.chatSegmentType = 'person';
    this.chatData = environment.ARTBOARD_CHAT_LIST;
    this.userDetails = environment.ARTBOARD_USER_DETAILS;
  }

  ngOnInit() {

  }

}
