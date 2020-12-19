import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import * as _ from 'lodash';

@Component({
  selector: 'app-abstracts-filter',
  templateUrl: './abstracts-filter.component.html',
  styleUrls: ['./abstracts-filter.component.scss'],
})
export class AbstractsFilterComponent implements OnInit {

  @Input() dates: any[];
  @Input() types: any[];

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.dates = _.cloneDeep(this.navParams.get('dates'));
    this.types = _.cloneDeep(this.navParams.get('types'));
  }

  applyFilters() {
    this.dismiss({
      types: this.types,
      dates: this.dates,
    });
  }

  async dismiss(data?: any) {
    await this.modalCtrl.dismiss(data);
  }
}
