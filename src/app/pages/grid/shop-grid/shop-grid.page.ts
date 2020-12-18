/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { GridServiceService } from '@app/services/grid/grid-service.service';

@Component({
  selector: 'app-shop-grid',
  templateUrl: './shop-grid.page.html',
  styleUrls: ['./shop-grid.page.scss'],
})
export class ShopGridPage implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;

  public products: Array<any>;

  constructor(public gridServ: GridServiceService) {
    this.products = this.gridServ.products_1;
  }

  ngOnInit() {
  }

}
