/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { GridServiceService } from '@app/services/grid/grid-service.service';

@Component({
  selector: 'app-filtering-card',
  templateUrl: './filtering-card.page.html',
  styleUrls: ['./filtering-card.page.scss'],
})
export class FilteringCardPage implements OnInit {
  public dataLists: Array<any>;
  public activeIndex: number;

  constructor(public gridServ: GridServiceService) {
    this.dataLists = this.gridServ.medicalList;
  }

  ngOnInit() {
    this.activeIndex = 0;
    console.log('dataLists', this.dataLists, this.activeIndex);
  }

  activeRow(index: number) {
    console.log('index', index);
    this.activeIndex = index;
  }

}
