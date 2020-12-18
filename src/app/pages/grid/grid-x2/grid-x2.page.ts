/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';
import { GridServiceService } from '@app/services/grid/grid-service.service';

@Component({
  selector: 'app-grid-x2',
  templateUrl: './grid-x2.page.html',
  styleUrls: ['./grid-x2.page.scss'],
})
export class GridX2Page implements OnInit {
  public medicalList: Array<any>;

  constructor(public gridServ: GridServiceService) {
    this.medicalList = this.gridServ.medicalList;
  }

  ngOnInit() {
  }

  favorites(index) {
    this.medicalList[index].checked = !this.medicalList[index].checked;
  }

}
