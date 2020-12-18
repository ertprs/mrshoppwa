/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

/* eslint-disable @typescript-eslint/camelcase */
import { Component } from '@angular/core';

@Component({
  selector: 'app-paypal-web',
  templateUrl: './paypal-web.page.html',
  styleUrls: ['./paypal-web.page.scss'],
})
export class PaypalWebPage {
  public paymentAmount: string;
  public currency: string;
  public currencyIcon: string;

  constructor() {
    this.paymentAmount = '3.33';
    this.currency = 'USD';
    this.currencyIcon = '$';
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const this$ = this;
    setTimeout(() => {
      // Render the PayPal button into #paypal-button-container
      const payPalName = 'paypal';
      window[payPalName].Buttons({
        // Set up the transaction
        createOrder: (data: any, actions: { order: { create: (arg0: { purchase_units: { amount: { value: string; }; }[]; }) => any; }; }) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this$.paymentAmount,
                },
              },
            ],
          });
        },

        // Finalize the transaction
        onApprove: (data: any, actions: { order: { capture: () => Promise<any>; }; }) => {
          return actions.order.capture()
            .then((details: { payer: { name: { given_name: string; }; }; }) => {
              console.log(details);
              // Show a success message to the buyer
              alert('Transaction completed by ' + details.payer.name.given_name + '!');
            })
            .catch((err: any) => {
              console.log(err);
            });
        },
      }).render('#paypal-button-container');
    }, 500);

  }

}
