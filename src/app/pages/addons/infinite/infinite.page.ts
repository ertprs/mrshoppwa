/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { UtilService } from '@app/services/util/util.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  public initialData: Array<any>;
  public loadedData: Array<any> = [];

  constructor(public util: UtilService) {
    this.initialData = environment.INFINITY_SCROLL_DATA;
  }

  ngOnInit() {
    this.resetList();
  }

  loadData(event) {
    this.util.infiniteData().subscribe((data: Array<any>) => {
      data.forEach(element => {
        this.loadedData.unshift(element);
      });
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.loadedData.length > 30) {
        this.util.presentToast('No more data available', true, 'bottom', 1500);
        event.target.disabled = true;
      }
    });
  }

  resetList() {
    this.loadedData = Object.assign([], this.initialData);
    this.infiniteScroll.disabled = false;
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
