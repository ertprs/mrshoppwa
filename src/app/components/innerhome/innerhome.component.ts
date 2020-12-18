/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit, Input } from '@angular/core';
import { WooCommerceService } from '../../services/woocommerce/woo-commerce.service';

@Component({
  selector: 'app-innerhome',
  templateUrl: './innerhome.component.html',
  styleUrls: ['./innerhome.component.scss'],
})
export class InnerhomeComponent implements OnInit {
  @Input() recieved_data: any;
  public productData: Array<any> = [];

  constructor(private woocommerceService: WooCommerceService) { }

  ngOnInit() {
    this.getRelatedProducts();
  }

  getRelatedProducts() {
    const pids = this.recieved_data;
    pids.forEach((pid) => {
      this.woocommerceService.getProduct(pid).then((productData) => {
        this.productData.push(productData);
      });
    });
  }

  open(data: any) {
    console.log('data', data);
    // const productId = data.id;
    // this.nav.navigateForward(`/productdetail/${productId}`);
  }

}
