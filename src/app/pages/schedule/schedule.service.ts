import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { LocalStorageService } from 'src/app/services/common/local-storage.service';
import { DataService } from 'src/app/services/database/data.service';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {

  private currentSession: any;

  constructor(
    private dataService: DataService,
    private localStorageService: LocalStorageService,
  ) {}

  getScheduleDays(favoritesOnly: boolean, filter: string, filterBySessionId: string, filterByDayId: string): Promise<any[]> {
    filter = (filter ? filter.toLowerCase() : '').trim();

    return this.dataService.getScheduleDays().then((items) => {
      let schedule: any[] = [];

      const orderedDays = _.sortBy(items, 'date');
      orderedDays.forEach((day) => {
        if (filterByDayId && day.$key !== filterByDayId) {
          return;
        }

        let sessions: any[] = [];

        let orderedSessions: any[] = _.map(day.sessions, (session, sessionId) => {
          return _.assign({}, session, {
            $key: sessionId,
          });
        });
        orderedSessions = _.sortBy(orderedSessions, 'title');

        _.forEach(orderedSessions, (session) => {
          if (filterBySessionId && session.$key !== filterBySessionId) {
            return;
          }

          const subsessions: any[] = [];

          let orderedSubsessions: any[] = _.map(session.subsessions, (subsession, subsessionId) => {
            return _.assign({}, subsession, {
              $key: subsessionId,
            });
          });
          orderedSubsessions = _.sortBy(orderedSubsessions, 'timeStart');

          _.forEach(orderedSubsessions, (subsession) => {
            if (favoritesOnly && !this.isInFavorites(subsession.$key)) {
              return;
            }

            if (filter && subsession.title.toLowerCase().indexOf(filter) < 0) {
              return;
            }

            subsessions.push({
              type: 'subsession',
              subsession: subsession,
              date: day.date,
            });
          });

          if (subsessions.length) {
            sessions.push({
              type: 'session',
              title: session.title,
            });
            sessions = sessions.concat(subsessions);
          }
        });

        if (sessions.length) {
          schedule.push({
            type: 'day',
            date: day.date,
          });
          schedule = schedule.concat(sessions);
        }
      });

      return schedule;
    });
  }

  getSessionFilterData(): Promise<any> {
    return this.dataService.getScheduleDays().then((items) => {
      const days = [];
      _.forEach(items, (day) => {
        const sessions = [];
        _.forEach(day.sessions, (session, sessionId) => {
          sessions.push({
            $key: sessionId,
            title: session.title,
          });
        });
        days.push({
          $key: day.$key,
          date: day.date,
          sessions: sessions,
        });
      });
      return days;
    });
  }

  isInFavorites(id: string) {
    const favorites = this.localStorageService.getItem('favoriteSessions');
    if (favorites) {
      return _.indexOf(favorites, id) >= 0;
    }
    return false;
  }

  toggleFavorites(sessionId) {
    const toggle = !this.isInFavorites(sessionId);
    let favorites = this.localStorageService.getItem('favoriteSessions') || [];
    if (toggle) {
      favorites.push(sessionId);
      favorites = _.uniq(favorites);
    } else {
      favorites = _.filter(favorites, (item) => {
        return item !== sessionId;
      });
    }
    this.localStorageService.setItem('favoriteSessions', favorites);
  }

  setCurrent(session: any) {
    this.currentSession = session;
  }

  getCurrent() {
    return this.currentSession;
  }
}
