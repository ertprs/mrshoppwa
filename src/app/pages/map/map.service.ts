import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/database/data.service';

@Injectable({
  providedIn: 'root',
})
export class MapService {

  constructor(
    private dataService: DataService,
  ) { }

  getMapDetails(): Promise<any> {
    return this.dataService.getMapDetails()
      .then((result) => {
        const data: any = {};
        data.origin = {
          lat: result.venue.latitude,
          lng: result.venue.longitude,
          icon: result.venue.marker,
          name: result.venue.title,
        };

        const markers = [];

        for (const marker of result.hotels) {
          markers.push({
            name: marker.title,
            icon: marker.marker,
            lat: marker.latitude,
            lng: marker.longitude,
          });
        }
        markers.push(data.origin);

        data.markers = markers;
        data.zoom = parseInt(result.zoomlevel, 10);
        return data;
      });
  }
}
