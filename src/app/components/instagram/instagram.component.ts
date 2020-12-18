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
  selector: 'instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss'],
})
export class InstagramComponent implements OnInit {
  public instaData: Array<any>;

  constructor() {
    this.instaData = environment.INSTAGRAM_DATA;
  }

  ngOnInit() {

  }

}
