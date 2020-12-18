/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-delivery',
  templateUrl: './check-delivery.component.html',
  styleUrls: ['./check-delivery.component.scss'],
})
export class CheckDeliveryComponent implements OnInit {
  public pin: number;

  constructor() { }

  ngOnInit() { }

  submitPin() {
    console.log('pin', this.pin);
  }

}
