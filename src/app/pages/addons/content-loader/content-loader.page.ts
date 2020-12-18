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
  selector: 'app-content-loader',
  templateUrl: './content-loader.page.html',
  styleUrls: ['./content-loader.page.scss'],
})
export class ContentLoaderPage implements OnInit {
  public segmentTab = 'api';
  public loadedData = null;
  public window = window;
  constructor(private util: UtilService) {
    this.util.getApiResponse().subscribe((response: any) => {
      console.log(response);
      this.loadedData = response;
    });
  }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
  }


}
