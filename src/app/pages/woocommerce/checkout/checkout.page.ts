/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataServicesService } from '@app/services/woocommerce/data-services.service';
import { WooCommerceService } from '@app/services/woocommerce/woo-commerce.service';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  public addNewPayment: boolean;
  public paymentGateways: any;
  public address: any = {};
  public lineItems: any = [];
  public paymentMethod: string;
  public paymentMethodTitle: string;
  public user: any;
  public spinner: boolean;
  public paymentSelected: boolean;
  public placingOrder: boolean;


  constructor(
    public nav: NavController,
    public alertController: AlertController,
    public woocommerceService: WooCommerceService,
    public dataService: DataServicesService,
    public storage: Storage,
    public route: Router,
    public location: Location
  ) {
    this.addNewPayment = true;
    this.spinner = false;
    this.paymentSelected = false;
    this.placingOrder = false;
    this.woocommerceService.getPaymentGateways().then(data => {
      console.log(data);
      this.paymentGateways = data;
    });
  }

  ngOnInit() {
    this.dataService.cart.forEach(item => {
      const obj = {};
      obj['product_id'] = item['product_id'];
      obj['quantity'] = item['quantity'];
      this.lineItems.push(obj);
    });
    console.log(this.lineItems);
  }

  ionViewDidEnter() {
    this.address = this.dataService.orders[0].shippingAddress;

  }
  addPayment() {
    this.addNewPayment = !this.addNewPayment;
  }

  chooseGateway(paymentType) {
    console.log('payment Done');
    this.paymentSelected = true;
    this.paymentMethod = paymentType.id;
    this.paymentMethodTitle = paymentType.title;
    this.done();
  }

  changeAddress() {
    this.nav.navigateForward('/NewAddress/$0');
  }

  done() {
    this.placingOrder = true;
    const orderObj = {};
    orderObj['payment_method'] = this.paymentMethod;
    orderObj['payment_method_title'] = this.paymentMethodTitle;
    orderObj['customer_id'] = this.dataService.currentUser.id;
    orderObj['billing'] = this.address;
    orderObj['shipping'] = this.address;
    orderObj['line_items'] = this.lineItems;
    console.log('orderObj', orderObj);
    this.woocommerceService.createOrder(orderObj).then(data => {
      this.placingOrder = false;
      console.log(data);
      this.storage.clear();
      Swal.fire({
        title: 'Awesome',
        text: 'Your order is placed successfully',
        icon: 'success',
        heightAuto: false
      });
      this.route.navigate(['woocommerce-products']);
    });
  }

  async back() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you want to cancel entering your payment info?',
      buttons: [
        {
          text: 'Yes',
          cssClass: 'mycolor',
          handler: yes => {
            this.location.back();
          }
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'mycolor',
          handler: () => {
            console.log('cancel');
          }
        }
      ]
    });

    await alert.present();
  }


}
