import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { DataService } from 'src/app/services/database/data.service';

@Injectable({
  providedIn: 'root',
})
export class SponsorsService {

  sponsors: any[];

  private currentSponsor: any;

  constructor(
    private dataService: DataService,
    ) { }

  getSponsor(sponsorId: string): Promise<any> {
    return this.dataService.getSponsor(sponsorId);
  }

  getSponsors(): Promise<any[]> {
    if (!this.sponsors) {
      return this.dataService.getSponsors();
    }
    return Promise.resolve(this.sponsors);
  }

  fetchSponsors(filter: string): Promise<any[]> {
    return this.getSponsors().then((sponsors) => {
      sponsors = Object.keys(sponsors).map((key) => sponsors[key]);

      if (filter) {
        filter = (filter ? filter.toLowerCase() : '').trim();

        sponsors = _.filter(sponsors, (sponsor) => {
          return (sponsor.name.toLowerCase().indexOf(filter) > -1);
        });
      }

      return Promise.resolve(sponsors);
    });
  }

  setCurrent(sponsor: any) {
    this.currentSponsor = sponsor;
  }

  getCurrent() {
    return this.currentSponsor;
  }
}
