/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';
import { UtilService } from '@app/services/util/util.service';

@Component({
  selector: 'app-insta-tabs',
  templateUrl: './insta-tabs.page.html',
  styleUrls: ['./insta-tabs.page.scss'],
})
export class InstaTabsPage implements OnInit {

  constructor(public util: UtilService) {
    this.util.navigate('insta-tabs/home');
  }

  ngOnInit() {
  }

}
