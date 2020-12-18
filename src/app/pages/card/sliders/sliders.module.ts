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
import { SharableModule } from '@app/components/sharable/sharable.module';
import { IonicModule } from '@ionic/angular';
import { SlidersPageRoutingModule } from './sliders-routing.module';
import { SlidersPage } from './sliders.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharableModule,
    SlidersPageRoutingModule
  ],
  declarations: [SlidersPage]
})
export class SlidersPageModule { }
