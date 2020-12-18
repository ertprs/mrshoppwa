
/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UtilService } from '@app/services/util/util.service';
import { Stripe } from '@ionic-native/stripe/ngx';

@Component({
  selector: 'app-stripepayment',
  templateUrl: './stripepayment.page.html',
  styleUrls: ['./stripepayment.page.scss'],
})
export class StripepaymentPage {
  public paymentAmount: string;
  public currency: string;
  public currencyIcon: string;
  public stripekey: string;
  public cardDetails: any;
  public cardNumber: any;
  public cvcnumber: number;
  public year: any;
  public month: any;
  public GROUP_SEPARATOR: string;

  constructor(
    public util: UtilService,
    public stripe: Stripe,
    public http: HttpClient,
  ) {
    this.paymentAmount = '3.33';
    this.currency = 'USD';
    this.currencyIcon = '$';
    this.stripekey = 'pk_test_SwGaKHT5AoDU4XP9eErQOZjq00htqO5Gix';
    this.cardDetails = {};
    this.GROUP_SEPARATOR = ' ';
  }
  format(valString: any) {
    if (!valString) {
      return '';
    }
    const valueString = valString
      .replace(/\W/gi, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
    if (valueString.length > 19) {
      this.cardNumber = this.cardNumber.slice(0, 19);
    } else {
      this.cardNumber = valueString;
    }
  }
  addCardDateSpacing(expiry) {
    const expiryVal = expiry
      .replace(/\W/gi, '')
      .replace(/\//g, '')
      .trim();

    if (expiryVal.length > 4) {
      return expiryVal.slice(0, 4).replace(/(.{2})/, '$1 /');
    } else {
      if (expiryVal.length < 3) { return expiryVal; }

      return expiry.replace(/(.{2})/, '$1 /');
    }
  }

  payWithStripe() {
    this.stripe.setPublishableKey(this.stripekey);
    this.cardDetails = {
      number: this.cardNumber.replace(/\W/gi, ''),
      expMonth: this.month,
      expYear: this.year,
      cvc: this.cvcnumber,
    };
    console.log('card', this.cardDetails);
    this.stripe.createCardToken(this.cardDetails)
      .then((token) => {
        console.log(token);
        this.util.presentToast('Stripe token for this payment generated', true, 'bottom', 1500);

        this.makePayment(token.id);
      })
      .catch((error) => this.util.presentToast(error, true, 'bottom', 1500));
  }

  makePayment(token) {
    this.http
      .post('https://us-central1-shoppr-c97a7.cloudfunctions.net/payWithStripe', {
        token: token.id,
      })
      .subscribe((data) => {
        console.log(data);
        alert();
      });
  }

}
