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
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.page.html',
  styleUrls: ['./register1.page.scss'],
})
export class Register1Page implements OnInit {
  public fullname: string;
  public mobileno: string;
  public email: string;

  constructor(
    public router: Router,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.fullname = '';
    this.email = '';
    this.mobileno = '';
  }

  gotoMain() {
    console.log('fullname: ' + this.fullname);
    console.log('mobileno: ' + this.mobileno);
    console.log('email: ' + this.email);
    this.router.navigate(['/']);
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }

}
