import { Injectable } from '@angular/core';
import { UtilService } from '@app/services/util/util.service';
import { Observable } from 'rxjs';
import { FAQDto } from '@app/models/faq.model';
import { BaseDataService } from './base-data.service';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class FAQDataService extends BaseDataService<FAQDto> {

  constructor(
    public firestore: FirestoreService,
    public util: UtilService
  ) { super('faq'); }
  public get(): Observable<FAQDto[]> {
    return this.firestore.get<FAQDto>(this.baseCollection);
  }

  public getOne(id: string): Observable<FAQDto> {
    return this.firestore.getOne<FAQDto>(this.baseCollection, id);
  }

  public update(data: Partial<FAQDto>): Promise<void> {
    return this.firestore.update<FAQDto>(this.baseCollection, data.id, data);
  }

  public delete(id: string): Promise<any> {
    return this.firestore.delete(this.baseCollection, id);
  }

  public create(data: FAQDto): Promise<void> {
    return this.firestore.create(this.baseCollection, data);
  }
}
