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
  selector: 'app-expandable-list',
  templateUrl: './expandable-list.page.html',
  styleUrls: ['./expandable-list.page.scss'],
})
export class ExpandableListPage implements OnInit {
  public lists: Array<any>;
  public showToolbar: boolean;
  public shownGroup: boolean;

  constructor(public gridServ: GridServiceService) {
    this.lists = this.gridServ.accordianLists;
  }

  ngOnInit() {
    this.toggleGroup(0);
  }
  ionViewWillEnter() {
    this.showToolbar = true;
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = true;
    } else {
      this.shownGroup = group;
    }
  }

  isGroupShown(group) {
    return this.shownGroup === group;
  }

}
