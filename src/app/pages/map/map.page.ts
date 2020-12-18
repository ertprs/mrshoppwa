import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import { MapService } from './map.service';
import { appTitle } from 'src/config';

declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('mapCanvas', {static: true}) mapElement: ElementRef;

  constructor(
    private service: MapService,
    public platform: Platform,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.service.getMapDetails()
    .then((mapData: any) => {
      const mapEle = this.mapElement.nativeElement;

      const map = new google.maps.Map(mapEle, {
        center: mapData.origin,
        zoom: mapData.zoom,
      });

      mapData.markers
        .forEach((markerData: any) => {
          const infoWindow = new google.maps.InfoWindow({
            content: `<h5>${markerData.name}</h5>`,
          });

          const marker = new google.maps.Marker({
            position: markerData,
            map: map,
            title: markerData.name,
            icon: markerData.icon,
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });

      google.maps.event.addListenerOnce(map, 'idle', () => {
        mapEle.classList.add('show-map');
      });

    });
  }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Map');
  }

}
