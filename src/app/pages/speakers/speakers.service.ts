import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { DataService } from 'src/app/services/database/data.service';
import { DATA_SERVICE, DataServiceType } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class SpeakersService {
  private currentSpeaker: any;

  constructor(
    private dataService: DataService,
  ) { }

  getSpeakerById(id: string) {
    return this.dataService.getSpeakers()
      .then((speakers) => {
        if (DATA_SERVICE === DataServiceType.firebase) {
          return speakers.find((speaker) => {
            return speaker.$key === id;
          });
        } else if (DATA_SERVICE === DataServiceType.http) {
          return _.get(speakers, id);
        }
      });
  }

  setCurrent(speaker: any) {
    this.currentSpeaker = speaker;
  }

  getCurrent() {
    return this.currentSpeaker;
  }
}
