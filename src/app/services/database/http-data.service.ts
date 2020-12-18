import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { apiUrl } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class HttpDataService extends DataService {
  private cache: { [collection: string]: any };

  constructor(private http: HttpClient) {
    super();
  }

  getAbstractAuthor(abstractId: string, authorId: string): Promise<any> {
    return Promise.resolve(this.cache.abstracts[abstractId].authors[authorId]);
  }

  getScheduleDays(): Promise<any[]> {
    return Promise.resolve(this.cache['schedule-days']);
  }

  getSpeakers(): Promise<any[]> {
    return Promise.resolve(this.cache['speakers']);
  }

  getAbout(): Promise<any> {
    return Promise.resolve(this.cache['conference']);
  }

  getAbstracts() {
    return Promise.resolve(this.cache['abstracts']);
  }

  getAbstract(abstractId: string): Promise<any> {
    return Promise.resolve(this.cache.abstracts[abstractId]);
  }

  getMapDetails(): Promise<any> {
    return Promise.resolve(this.cache.map);
  }

  getEvents(): Promise<any[]> {
    return Promise.resolve(this.cache.events);
  }

  getEvent(eventId: string): Promise<any> {
    return Promise.resolve(this.cache.events[eventId]);
  }

  getCommittee(committeeId: string): Promise<any> {
    return Promise.resolve(this.cache.commitees[committeeId]);
  }

  getCommitteeMember(committeeId: string, memberId: string): Promise<any> {
    return Promise.resolve(this.cache.commitees[committeeId].members[memberId]);
  }

  getCommittees(): Promise<any[]> {
    return Promise.resolve(this.cache.commitees);
  }

  getSponsor(sponsorId: string): Promise<any> {
    return Promise.resolve(this.cache.sponsors[sponsorId]);
  }

  getSponsors(): Promise<any[]> {
    return Promise.resolve(this.cache.sponsors);
  }

  init(): Promise<boolean> {
    if (this.cache) {
      return Promise.resolve(true);
    }

    return this.http.get(apiUrl)
      .toPromise()
      .then((response) => {
        this.cache = response;
        this.setInternalIds(['speakers', 'schedule-days', 'abstracts', 'commitees', 'events', 'sessions', 'sponsors']);
        return true;
      });
  }

  private setInternalIds(collections: string[]) {
    collections.forEach((collectionKey) => {
      const collection = this.cache[collectionKey];
      Object.keys(collection).forEach((id) => collection[id].$key = id);
    });
  }
}
