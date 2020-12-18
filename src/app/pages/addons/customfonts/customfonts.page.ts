/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customfonts',
  templateUrl: './customfonts.page.html',
  styleUrls: ['./customfonts.page.scss'],
})
export class CustomfontsPage implements OnInit {
  public segmentTab: string;
  public title: string;
  public title_2: string;
  public description: string;
  public name: string;
  public language: string;

  constructor() {
    this.segmentTab = 'local1';
  }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
  }

}
