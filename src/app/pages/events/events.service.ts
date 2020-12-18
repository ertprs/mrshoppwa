import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { DataService } from 'src/app/services/database/data.service';
import { LocalStorageService } from 'src/app/services/common/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class EventsService {

  events = null;

  private currentEvent: any;

  constructor(
    private dataService: DataService,
    private localStorageService: LocalStorageService,
  ) { }

  getEvent(eventId): Promise<any> {
    return this.dataService.getEvent(eventId);
  }

  getEvents(): Promise<any[]> {
    if (!this.events) {
      return this.dataService.getEvents().then((items) => {
        this.events = items;

        const favorites = this.localStorageService.getItem('favoritesEvents') || [];
        _.each(items, (item) => {
          if (favorites.indexOf(item.$key) >= 0) {
            item.isInFavorites = true;
          }
        });
        return items;
      });
    }
    return Promise.resolve(this.events);
  }

  fetchEvents(filter, showFavorites) {
    filter = filter ? filter.toLowerCase() : filter;
    return this.getEvents().then((events) => {
      const filteredEvents = _.filter(events, (event) => {
        return (!filter || event.title.toLowerCase().indexOf(filter) >= 0)
          && (!showFavorites || event.isInFavorites);
      });

      return Promise.resolve(filteredEvents);
    });
  }

  toggleFavorites(eventId: string) {
    const toggle = !this.isInFavorites(eventId);

    _.each(this.events, (event) => {
      if (event.$key === eventId) {
        event.isInFavorites = toggle;

        let favorites = this.localStorageService.getItem('favoritesEvents') || [];
        if (toggle) {
          favorites.push(event.$key);
          favorites = _.uniq(favorites);
        } else {
          favorites = _.filter(favorites, (item) => {
            return item !== event.$key;
          });
        }
        this.localStorageService.setItem('favoritesEvents', favorites);
      }
    });
  }

  isInFavorites(id: string) {
    const favorites = this.localStorageService.getItem('favoritesEvents');
    return _.indexOf(favorites, id) >= 0;
  }

  setCurrent(event: any) {
    this.currentEvent = event;
  }

  getCurrent() {
    return this.currentEvent;
  }
}
