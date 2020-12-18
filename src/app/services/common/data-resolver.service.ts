import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DataService } from '../database/data.service';

@Injectable({
  providedIn: 'root',
})
export class DataResolverService implements Resolve<any> {

  constructor(
    private dataService: DataService,
  ) { }

  async resolve() {
    return await this.dataService.init();
  }
}
