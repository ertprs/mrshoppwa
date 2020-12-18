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

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { SharableModule } from '@app/components/sharable/sharable.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharableModule,
    SettingsPageRoutingModule,
  ],
  declarations: [SettingsPage],
})
export class SettingsPageModule { }
