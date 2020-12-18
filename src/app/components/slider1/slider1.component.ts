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
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.scss'],
})
export class Slider1Component implements OnInit {
  @ViewChild('slideWithNav', { static: true }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: true }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: true }) slideWithNav3: IonSlides;

  public medicalList: Array<any>;
  public slideOptsOne: object = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    zoom: false
  };
  public slideOpts: object = {
    effect: 'cube',
    zoom: false
  };
  public slideOpts1: object = {
    effect: 'cube'
  }
  public slideOpts2: object = {
    effect: 'fade'
  }
  constructor(private gridServ: GridServiceService) {
    this.medicalList = this.gridServ.medicalList;
  }

  ngOnInit() { }

}
