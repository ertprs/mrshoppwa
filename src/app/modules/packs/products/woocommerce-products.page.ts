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
    this.route.navigate(['tabs/pack-details', { id: product.id }]);
  }

}
