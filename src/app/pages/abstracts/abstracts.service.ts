import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { DataService } from 'src/app/services/database/data.service';
import { LocalStorageService } from 'src/app/services/common/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AbstractsService {

  types: any[] = [];
  dates: any = [];
  abstracts = null;

  private abstract: any;
  private author: any;

  constructor(
    private dataService: DataService,
    private localStorageService: LocalStorageService,
  ) { }

  getAuthor(abstractId, authorId) {
    return this.dataService.getAbstractAuthor(abstractId, authorId);
  }

  getAbstract(abstractId) {
    return this.dataService.getAbstract(abstractId);
  }

  getTypes() {
    return this.getAbstracts().then((abstracts) => {
      _.each(abstracts, (abstract) => {
        this.types.push({
          name: abstract.type,
          isChecked: true,
        });
      });
      const arrOfTypes = _.uniqBy(this.types, 'name');
      return arrOfTypes;
    });
  }

  getDates() {
    return this.getAbstracts().then((abstracts) => {
      _.each(abstracts, (abstract) => {
        const date = new Date(abstract.startDate);
        this.dates.push({
          name: date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear(),
          isChecked: true,
        });
      });
      const arrOfDates = _.uniqBy(this.dates, 'name');
      return arrOfDates;
    });
  }

  fetchAbstracts(filter: string, showFavorites: boolean, types: any[], dates: any[]) {
    filter = filter ? filter.toLowerCase() : filter;
    return this.getAbstracts().then(() => {
      const filteredGroups = _.filter(this.abstracts, (abstract: any) => {
        const type = abstract.type;
        const date = new Date(abstract.startDate);
        const fullDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
        const currentType = _.find(types, (item) => item.name === type);
        const currentDate = _.find(dates, (item) => item.name === fullDate);

        return (!filter || abstract.title.toLowerCase().indexOf(filter) >= 0)
          && (!showFavorites || abstract.isInFavorites)
          && (!currentType || currentType.isChecked)
          && (!currentDate || currentDate.isChecked);
      });

      return Promise.resolve(filteredGroups);
    });
  }

  toggleFavorites(abstractId) {
    const toggle = !this.isInFavorites(abstractId);

    _.each(this.abstracts, (abstractItem) => {
      if (abstractItem.$key === abstractId) {
        abstractItem.isInFavorites = toggle;

        let favorites = this.localStorageService.getItem('favoritesAbstracts') || [];

        if (toggle) {
          favorites.push(abstractItem.$key);
          favorites = _.uniq(favorites);
        } else {
          favorites = _.filter(favorites, (item) => item !== abstractItem.$key);
        }
        this.localStorageService.setItem('favoritesAbstracts', favorites);
      }
    });
  }

  isInFavorites(id) {
    const favorites = this.localStorageService.getItem('favoritesAbstracts');
    return _.indexOf(favorites, id) >= 0;
  }

  getAbstracts() {
    if (!this.abstracts) {
      return this.dataService.getAbstracts().then((items) => {
        this.abstracts = items;

        const favorites = this.localStorageService.getItem('favoritesAbstracts') || [];
        _.each(items, (item) => {
          if (favorites.indexOf(item.$key) >= 0) {
            item.isInFavorites = true;
          }
        });

        return items;
      });
    }
    return Promise.resolve(this.abstracts);
  }

  setCurrent(abstract: any) {
    this.abstract = abstract;
  }

  getCurrent() {
    return this.abstract;
  }

  setCurrentAuthor(author: any) {
    this.author = author;
  }

  getCurrentAuthor() {
    return this.author;
  }
}
