
/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.scss'],
})
export class MyAddressComponent implements OnInit {
  public address: Array<any>;

  constructor() {
    this.address = environment.USER_ADDRESS;
  }

  ngOnInit() { }

}
