/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymentCardsComponent } from '../payment-cards/payment-cards.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { MyAddressComponent } from '../my-address/my-address.component';
import { ReviewComponent } from '../review/review.component';
import { ProductComponent } from '../product/product.component';
import { InnerhomeComponent } from '../innerhome/innerhome.component';
import { TwitterLoginComponent } from '../twitter-login/twitter-login.component';
import { FacebookLoginComponent } from '../facebook-login/facebook-login.component';
import { GoogleLoginComponent } from '../google-login/google-login.component';
import { ActionsheetComponent } from '../actionsheet/actionsheet.component';
import { AlertComponent } from '../alert/alert.component';
import { DatetimeComponent } from '../datetime/datetime.component';
import { RangeComponent } from '../range/range.component';
import { CheckDeliveryComponent } from '../check-delivery/check-delivery.component';

@NgModule({
  declarations: [ActionsheetComponent, AlertComponent, CheckDeliveryComponent, DatetimeComponent, RangeComponent, GoogleLoginComponent, FacebookLoginComponent, TwitterLoginComponent, ProductComponent, InnerhomeComponent, ReviewComponent, MyAddressComponent, MyProfileComponent, PaymentCardsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [ActionsheetComponent, AlertComponent, CheckDeliveryComponent, DatetimeComponent, RangeComponent, GoogleLoginComponent, FacebookLoginComponent, TwitterLoginComponent, ProductComponent, InnerhomeComponent, ReviewComponent, MyAddressComponent, MyProfileComponent, PaymentCardsComponent],
})
export class SharableModule { }
