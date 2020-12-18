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
import { Slider1Component } from '../slider1/slider1.component';
import { Slider2Component } from '../slider2/slider2.component';
import { Slider3Component } from '../slider3/slider3.component';
import { Slider4Component } from '../slider4/slider4.component';
import { Slider5Component } from '../slider5/slider5.component';
import { PaymentCardsComponent } from '../payment-cards/payment-cards.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { MyAddressComponent } from '../my-address/my-address.component';
import { ReviewComponent } from '../review/review.component';
import { ProductComponent } from '../product/product.component';
import { InnerhomeComponent } from '../innerhome/innerhome.component';
import { InstagramComponent } from '../instagram/instagram.component';
import { TwitterLoginComponent } from '../twitter-login/twitter-login.component';
import { FacebookLoginComponent } from '../facebook-login/facebook-login.component';
import { GoogleLoginComponent } from '../google-login/google-login.component';
import { ActionsheetComponent } from '../actionsheet/actionsheet.component';
import { AlertComponent } from '../alert/alert.component';
import { DatetimeComponent } from '../datetime/datetime.component';
import { RangeComponent } from '../range/range.component';
import { RippleComponent } from '../ripple/ripple.component';
import { CheckDeliveryComponent } from '../check-delivery/check-delivery.component';

@NgModule({
  declarations: [ActionsheetComponent, AlertComponent, CheckDeliveryComponent, DatetimeComponent, RangeComponent, RippleComponent, GoogleLoginComponent, FacebookLoginComponent, TwitterLoginComponent, InstagramComponent, ProductComponent, InnerhomeComponent, ReviewComponent, MyAddressComponent, MyProfileComponent, PaymentCardsComponent, Slider1Component, Slider2Component, Slider3Component, Slider4Component, Slider5Component],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [ActionsheetComponent, AlertComponent, CheckDeliveryComponent, DatetimeComponent, RangeComponent, RippleComponent, GoogleLoginComponent, FacebookLoginComponent, TwitterLoginComponent, InstagramComponent, ProductComponent, InnerhomeComponent, ReviewComponent, MyAddressComponent, MyProfileComponent, PaymentCardsComponent, Slider1Component, Slider2Component, Slider3Component, Slider4Component, Slider5Component],
})
export class SharableModule { }
