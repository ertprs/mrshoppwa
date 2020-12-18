/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.page.html',
  styleUrls: ['./netflix.page.scss'],
})
export class NetflixPage implements OnInit {
  public netflixSeriesData: any;
  public netflixMoviesData: any;
  public segmentTab = 'series';


  constructor() {
    this.netflixMoviesData = environment.NETFLIX_MOVIE_DATA;
    this.netflixSeriesData = environment.NETFLIX_SERIES_DATA;
  }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
  }

}
