import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseDataService extends DataService {
  constructor(private db: AngularFireDatabase) {
    super();
  }

  getScheduleDays(): Promise<any[]> {
    return this.db.list('schedule-days').snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => ({ $key: a.key, ...a.payload.val() }));
      }),
      first(),
    ).toPromise();
  }

  getSpeakers(): Promise<any[]> {
    return this.db.list('speakers').snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => ({ $key: a.key, ...a.payload.val() }));
      }),
      first(),
    ).toPromise();
  }

  getAbout(): Promise<any> {
    return this.db.object('conference').valueChanges().pipe(first()).toPromise();
  }

  getAbstracts() {
    return this.db.list('abstracts').snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => ({ $key: a.key, ...a.payload.val() }));
      }),
      first(),
    ).toPromise();
  }

  getAbstractAuthor(abstractId: string, authorId: string): Promise<any> {
    return this.db.object(`abstracts/${abstractId}/authors/${authorId}`).valueChanges().pipe(first()).toPromise();
  }

  getAbstract(abstractId: string): Promise<any> {
    return this.db.object(`abstracts/${abstractId}`).valueChanges().pipe(first()).toPromise();
  }

  getMapDetails(): Promise<any> {
    return this.db.object('map').valueChanges().pipe(first()).toPromise();
  }

  getEvents(): Promise<any[]> {
    return this.db.list('events').snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => ({ $key: a.key, ...a.payload.val() }));
      }),
      first(),
    ).toPromise();
  }

  getEvent(eventId: string): Promise<any> {
    return this.db.object(`events/${eventId}`).valueChanges().pipe(first()).toPromise();
  }

  getCommittee(committeeId: string): Promise<any> {
    return this.db.object(`committees/${committeeId}`).valueChanges().pipe(first()).toPromise();
  }

  getCommitteeMember(committeeId: string, memberId: string): Promise<any> {
    return this.db.object(`committees/${committeeId}/members${memberId}`).valueChanges().pipe(first()).toPromise();
  }

  getCommittees(): Promise<any[]> {
    return this.db.list('commitees').snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => ({ $key: a.key, ...a.payload.val() }));
      }),
      first(),
    ).toPromise();
  }

  getSponsor(sponsorId: string): Promise<any> {
    return this.db.object(`sponsors/${sponsorId}`).valueChanges().pipe(first()).toPromise();
  }

  getSponsors(): Promise<any[]> {
    return this.db.list('sponsors').snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => ({ $key: a.key, ...a.payload.val() }));
      }),
      first(),
    ).toPromise();
  }

  init(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
