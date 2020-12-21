/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { WooCommerceService } from '@app/services/woocommerce/woo-commerce.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ViewDidEnter, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-woocommerce-products',
  templateUrl: './woocommerce-products.page.html',
  styleUrls: ['./woocommerce-products.page.scss'],
})
export class WoocommerceProductsPage implements OnInit, ViewWillEnter {
  public getProducts: Array<any>;

  constructor(
    public woocommerceService: WooCommerceService,
    public http: HttpClient,
    public route: Router,
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getProducts = [];
    const products = this.woocommerceService.getProducts();
    this.http.get(products).subscribe((res: any) => {
      this.getProducts = res;
    });
  }

  goToProductDetail(product) {
    console.log('product', product);
    this.route.navigate(['tabs/product-details', { id: product.id }]);

  }
}
