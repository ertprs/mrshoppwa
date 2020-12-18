/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import { TaxiService } from '@app/services/taxi/taxi.service';
import { MouseEvent } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-uber-map-flow',
  templateUrl: './uber-map-flow.page.html',
  styleUrls: ['./uber-map-flow.page.scss'],
})
export class UberMapFlowPage implements OnInit {
  public zoom: number;
  public lat: number;
  public lng: number;
  public markerUrl: string;
  public driveStatus: boolean;
  public origin: any;
  public destination: any;
  public userCard: boolean;
  public style: Array<any>;

  constructor(
    public router: Router,
    public geolocation: Geolocation,
    public menuCtrl: MenuController,
    public alertController: AlertController,
    public taxiServ: TaxiService,
  ) {

    this.style = taxiServ.style;
    this.zoom = 12;
    this.lat = 26.8549;
    this.lng = 75.8243;
    this.markerUrl = 'assets/map/markerPin.png';
    this.driveStatus = false;
    this.userCard = false;

    console.log(taxiServ.driverStatus);
    this.driveStatus = taxiServ.driverStatus;
    this.userCard = taxiServ.userCard;
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
    this.getDirection();
    console.log('ngonit');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.userCard = this.taxiServ.userCard;
  }

  mapReady(check: boolean, event: any) {
    if (event) {
      console.log('event if', check);
    }
  }

  markerDragEnd($event: MouseEvent) {
    console.log('dragEnd', $event, '$event.coords.lat', $event.coords.lat, '$event.coords.lng', $event.coords.lng);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
  }

  driverStatusChange(event: any, val: any) {
    console.log('status', this.driveStatus, event, event.target.value, val);
    this.taxiServ.driverStatus = this.driveStatus;

    if (this.driveStatus) {
      console.log('true');
      setTimeout(() => {
        this.presentAlertConfirm();
      }, 2000);

    } else {
      this.taxiServ.userCard = false;
      this.userCard = false;
    }

  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm Request!',
      message: 'You have a new Pickup request',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigate(['customerRequest']);
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.taxiServ.userCard = true;
            this.userCard = true;
          }
        }
      ]
    });

    await alert.present();
  }


  getDirection() {
    this.origin = { lat: 26.857114, lng: 75.8127086 };
    this.destination = { lat: 0.5 + 26.857114, lng: 0.5 + 75.8127086 };
    console.log('origin', this.origin, this.destination);
  }


  public getcurrentLocations() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('resp', resp);
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log('data', data);
    });
  }

}
