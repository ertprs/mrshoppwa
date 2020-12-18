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
  selector: 'app-product-card',
  templateUrl: './product-card.page.html',
  styleUrls: ['./product-card.page.scss'],
})
export class ProductCardPage implements OnInit {
  public medicalList: Array<any>;

  constructor(public gridServ: GridServiceService) {
    this.medicalList = this.gridServ.medicalList;
  }

  ngOnInit() {
  }

  favorites(index: number) {
    this.medicalList[index].checked = !this.medicalList[index].checked;
  }

}
