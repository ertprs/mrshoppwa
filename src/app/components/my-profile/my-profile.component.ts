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
  selector: 'my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  public names: string;
  public email: string;
  public phoneNumber: string;
  public gender: string;

  constructor() {
    this.names = 'Jane Doe';
    this.email = 'JaneDoe@monthlyrepeat.com';
    this.phoneNumber = '+1 1234567890';
    this.gender = 'Female';
  }

  ngOnInit() { }

}
