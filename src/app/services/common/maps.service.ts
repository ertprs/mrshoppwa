import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class MapsService {

  constructor(
    private platform: Platform,
  ) { }

  openMapsApp(location: any, label: string = null) {
    let q;
    if (this.platform.is('android')) {
      q = 'geo:' + location + '?q=' + location;
      if (label) {
        q += '(' + label + ')';
      }
    } else {
      q = 'maps://maps.apple.com/?q=' + location;
    }
    window.location.href = q;
  }
}
