import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, IonItemSliding, ToastController } from '@ionic/angular';
import { AbstractsService } from '../abstracts.service';
import { AbstractsFilterComponent } from '../abstracts-filter/abstracts-filter.component';
import { appTitle } from 'src/config';

@Component({
  selector: 'app-abstracts',
  templateUrl: './abstracts.component.html',
  styleUrls: ['./abstracts.component.scss'],
})
export class AbstractsComponent implements OnInit {

  queryText = '';
  segment: 'all' | 'favorites' = 'all';
  abstracts: any[] = [];

  get isFilterDirty(): boolean {
    return this.types && this.dates && (this.types.some((x) => !x.isChecked) || this.dates.some((x) => !x.isChecked));
  }

  private types: any[];
  private dates: any[];

  constructor(
    private abstractsService: AbstractsService,
    private modalCtrl: ModalController,
    private router: Router,
    private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.updateList();
  }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Abstracts');
    Promise.all([this.loadTypes(), this.loadDates()])
      .then(() => this.updateList());
  }

  updateList() {
    this.abstractsService.fetchAbstracts(this.queryText, this.segment === 'favorites', this.types, this.dates)
      .then((abstracts) => {
        this.abstracts = abstracts;
      });
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: AbstractsFilterComponent,
      componentProps: {
        dates: this.dates,
        types: this.types,
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.dates = data.dates;
      this.types = data.types;
      this.updateList();
    }
  }

  goToAbstractDetail(abstract: any) {
    this.abstractsService.setCurrent(abstract);
    this.router.navigate([`${abstract.$key}`], {relativeTo: this.route});
  }

  async addFavorite(slidingItem: IonItemSliding, id: string) {
    slidingItem.close();

    this.abstractsService.toggleFavorites(id);

    const toast = await this.toastCtrl.create({
      message: 'Abstract added to favorites',
      duration: 3000,
    });
    toast.present();

    this.updateList();
  }

  async removeFavorite(slidingItem: IonItemSliding, id: string) {
    this.abstractsService.toggleFavorites(id);
    slidingItem.close();

    const toast = await this.toastCtrl.create({
      message: 'Abstract removed from favorites',
      duration: 3000,
    });
    toast.present();

    this.updateList();
  }

  clearFilter() {
    this.types.forEach((x) => x.isChecked = true);
    this.dates.forEach((x) => x.isChecked = true);
    this.updateList();
  }

  isInFavorites(key: string) {
    return this.abstractsService.isInFavorites(key);
  }

  private loadTypes() {
    return this.abstractsService.getTypes().then((types) => this.types = types);
  }

  private loadDates() {
    return this.abstractsService.getDates().then((dates) => this.dates = dates);
  }
}
