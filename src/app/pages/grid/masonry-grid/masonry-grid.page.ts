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
  selector: 'app-masonry-grid',
  templateUrl: './masonry-grid.page.html',
  styleUrls: ['./masonry-grid.page.scss'],
})
export class MasonryGridPage implements OnInit {
  public buzz: Array<any>;
  public buzz1: Array<any>;

  constructor(public gridServ: GridServiceService) {
    this.buzz = this.gridServ.buzz;
    this.buzz1 = this.gridServ.buzz1;
  }

  ngOnInit() {
  }

}
