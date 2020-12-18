import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';

declare var google: any;

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit, AfterViewInit {

  @ViewChild('mapCanvas', {static: false}) mapElement: ElementRef;
  event: any;

  constructor(
    private eventsService: EventsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.event = this.eventsService.getCurrent();
    if (!this.event) {
      this.init();
    }
  }

  init() {
    this.activatedRoute.params.subscribe((params) => {
      this.eventsService.getEvent(params.id).then((event) => {
        this.event = event;
        this.updateMapElement();
      });
    });
  }

  ngAfterViewInit(): void {
    if (this.event) {
      this.updateMapElement();
    }
  }

  isInFavorites(key: string) {
    return this.eventsService.isInFavorites(key);
  }

  toggleFavorites(key: string) {
    this.eventsService.toggleFavorites(key);
  }

  private updateMapElement() {
    const mapData = {
      origin: {
        lat: this.event.mapData.latitude,
        lng: this.event.mapData.longitude,
        name: this.event.mapData.annoTitle,
      },
      zoom: parseInt(this.event.mapData.zoomlevel, 10),
    };

    const mapEle = this.mapElement.nativeElement;

    const map = new google.maps.Map(mapEle, {
      center: mapData.origin,
      zoom: mapData.zoom,
    });
    const marker = new google.maps.Marker({
      position: mapData.origin,
      map: map,
      title: mapData.origin.name,
    });
  }
}
