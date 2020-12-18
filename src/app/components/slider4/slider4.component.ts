/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { GridServiceService } from '../../services/grid/grid-service.service';

@Component({
  selector: 'app-slider4',
  templateUrl: './slider4.component.html',
  styleUrls: ['./slider4.component.scss'],
})
export class Slider4Component implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;
  public medicalList: Array<any>;
  public numbers: Array<any>;
  public slideOpts: object = {
    effect: 'cube',
    zoom: false,
  };

  constructor(public gridServ: GridServiceService) {
    this.numbers = Array(6).fill('1');
    console.log('array', this.numbers);
    this.medicalList = this.gridServ.medicalList_2;
  }

  ngOnInit() { }

  favorites(index) {
    this.medicalList[index].checked = !this.medicalList[index].checked;
  }

}
