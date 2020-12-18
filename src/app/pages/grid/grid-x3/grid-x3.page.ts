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
  selector: 'app-grid-x3',
  templateUrl: './grid-x3.page.html',
  styleUrls: ['./grid-x3.page.scss'],
})
export class GridX3Page implements OnInit {
  public medicines: Array<any>;
  constructor(public gridServ: GridServiceService) {
    this.medicines = this.gridServ.medicines;
  }

  ngOnInit() {
  }

}
