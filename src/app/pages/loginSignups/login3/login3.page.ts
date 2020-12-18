/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login3',
  templateUrl: './login3.page.html',
  styleUrls: ['./login3.page.scss'],
})
export class Login3Page implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public router: Router,
    public menuCtrl: MenuController,
  ) { }

  ngOnInit() {
    this.email = '';
    this.password = '';
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }

  gotoMain() {
    this.router.navigate(['/']);
  }
}
