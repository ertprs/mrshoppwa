import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ModalController, IonItemSliding, ToastController } from '@ionic/angular';
import * as _ from 'lodash';
import { ScheduleService } from '../schedule.service';
import { ScheduleFilterComponent } from '../schedule-filter/schedule-filter.component';
import { Day, Session, SubSession } from 'src/app/interfaces/sessions';
import { appTitle } from 'src/config';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {

  queryText = '';
  segment: 'all' | 'favorites' = 'all';
  days: Day[] = [];
  filterBySessionId: string;
  filterByDayId: string;

  constructor(
    private scheduleService: ScheduleService,
    private modalCtrl: ModalController,
    private router: Router,
    private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.updateSchedule();
  }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Schedule');
    this.updateSchedule();
  }

  updateSchedule() {
    this.scheduleService.getScheduleDays(this.segment === 'favorites', this.queryText, this.filterBySessionId, this.filterByDayId)
      .then((days) => {
        this.days = this.convertScheduleDays(days);
      });
  }

  async presentFilter() {
    const days = await this.scheduleService.getSessionFilterData();
    const modal = await this.modalCtrl.create({
      component: ScheduleFilterComponent,
      componentProps: {
        days: days,
        filterBySessionId: this.filterBySessionId,
        filterByDayId: this.filterByDayId,
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.filterBySessionId = data.filterBySessionId === 'all' ? null : data.filterBySessionId;
      this.filterByDayId = data.filterByDayId === 'all' ? null : data.filterByDayId;
      this.updateSchedule();
    }
  }

  goToSessionDetail(sessionData: any) {
    this.scheduleService.setCurrent(sessionData);
    this.router.navigate([`${sessionData.subsession.$key}`], {relativeTo: this.route});
  }

  async addFavorite(slidingItem: IonItemSliding, sessionData: any) {
    slidingItem.close();

    if (!this.scheduleService.isInFavorites(sessionData.$key)) {
      this.scheduleService.toggleFavorites(sessionData.$key);

      const toast = await this.toastCtrl.create({
        message: 'Session added to favorites',
        duration: 3000,
      });
      toast.present();

      this.updateSchedule();
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Session is already in favorites',
        duration: 3000,
      });
      toast.present();
    }
  }

  async removeFavorite(slidingItem: IonItemSliding, sessionData: any) {
    this.scheduleService.toggleFavorites(sessionData.$key);
    slidingItem.close();

    const toast = await this.toastCtrl.create({
      message: 'Session removed from favorites',
      duration: 3000,
    });
    toast.present();

    this.updateSchedule();
  }

  clearFilter() {
    this.filterByDayId = null;
    this.filterBySessionId = null;
    this.updateSchedule();
  }

  private convertScheduleDays(days): Day[] {
    const result: Day[] = [];
    for (const day of days) {
      if (day.type === 'day') {
        const newDay: Day = {
          date: day.date,
          sessions: [],
        };
        result.push(newDay);
      }

      if (day.type === 'session') {
        const newSession: Session = {
          time: day.title,
          subSessions: [],
        };
        _.last(result).sessions.push(newSession);
      }

      if (day.type === 'subsession') {
        const newSubSession: SubSession = {
          date: day.date,
          subsession: day.subsession,
        };
        _.last(_.last(result).sessions).subSessions.push(newSubSession);
      }
    }
    return result;
  }
}
