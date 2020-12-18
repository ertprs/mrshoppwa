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
  selector: 'app-full-grid',
  templateUrl: './full-grid.page.html',
  styleUrls: ['./full-grid.page.scss'],
})
export class FullGridPage implements OnInit {
  public gridImages: Array<any>;

  constructor(public gridServ: GridServiceService) {
    this.gridImages = this.gridServ.FULL_WIDTH_GRID;
  }

  ngOnInit() {
  }

}
