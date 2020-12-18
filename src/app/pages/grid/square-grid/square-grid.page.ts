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
  selector: 'app-square-grid',
  templateUrl: './square-grid.page.html',
  styleUrls: ['./square-grid.page.scss'],
})
export class SquareGridPage implements OnInit {
  public gridImages: Array<any>;


  constructor(public gridServ: GridServiceService) {
    this.gridImages = this.gridServ.SQUARE_GRID;
  }

  ngOnInit() {
  }

}
