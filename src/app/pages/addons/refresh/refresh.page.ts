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
import { environment } from '@env/environment';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.page.html',
  styleUrls: ['./refresh.page.scss'],
})
export class RefreshPage implements OnInit {
  public initialData: Array<any>;
  public loadedData: Array<any> = [];

  constructor(private util: UtilService) {
    this.initialData = environment.REFRESH_DATA;
  }

  ngOnInit() {
    this.resetList();
  }

  doRefresh(event) {
    if (this.loadedData.length > 10) {
      setTimeout(() => {
        this.util.presentToast('No new data available', true, 'top', 1500);
        event.target.complete();
      }, 1000);
    } else {
      this.util.getApiResponse().subscribe((data) => {
        console.log(data);
        const result = data['result'];
        result.forEach((element) => {
          this.loadedData.unshift(element);
        });
        console.log('Async operation has ended');
        event.target.complete();
      });
    }
  }

  resetList() {
    this.loadedData = Object.assign([], this.initialData);
  }

}
