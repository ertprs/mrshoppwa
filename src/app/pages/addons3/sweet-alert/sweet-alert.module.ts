/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SweetAlertPageRoutingModule } from './sweet-alert-routing.module';

import { SweetAlertPage } from './sweet-alert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SweetAlertPageRoutingModule,
  ],
  declarations: [SweetAlertPage],
})
export class SweetAlertPageModule {}
