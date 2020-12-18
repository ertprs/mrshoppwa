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
  selector: 'app-instaprofile',
  templateUrl: './instaprofile.page.html',
  styleUrls: ['./instaprofile.page.scss'],
})
export class InstaprofilePage implements OnInit {

  public segmentTab: any;
  public gridGallery: Array<any>;

  constructor() {
    this.gridGallery = environment.INSTA_GRID_GALLERY;
  }

  ngOnInit() {
    this.segmentTab = 'grid';
  }

  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
  }

}
