import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-schedule-filter',
  templateUrl: './schedule-filter.component.html',
  styleUrls: ['./schedule-filter.component.scss'],
})
export class ScheduleFilterComponent implements OnInit {

  @Input() days: any[];
  @Input() filterByDayId: string;
  @Input() filterBySessionId: string;

  selectedSession: string = 'all';
  selectedDay: string = 'all';
  sessions: any[] = [];

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
  ) { }

  ngOnInit() {
    this.days = this.navParams.get('days');
    this.selectedDay = this.navParams.get('filterByDayId') || 'all';
    this.selectedSession = this.navParams.get('filterBySessionId') || 'all';
    this.sessions = this.getSessions();
  }

  selectedDayChange($event: CustomEvent) {
    this.selectedDay = $event.detail.value;
    this.sessions = this.getSessions();

    const isSessionExist = !!this.sessions.find((session) => {
      return session.$key === this.selectedSession;
    });
    if (!isSessionExist) {
      this.selectedSession = 'all';
    }
  }

  sessionsChange($event: CustomEvent) {
    this.selectedSession = $event.detail.value;
    this.sessions = this.getSessions();
  }

  getSessions() {
    if (this.selectedDay === 'all') {
      const sessions = [];
      this.days.forEach((day) => day.sessions.forEach((session) => sessions.push(session)));
      return sessions;
    }
    return this.days.find((x) => x.$key === this.selectedDay).sessions;
  }

  applyFilters() {
    this.dismiss({
      filterBySessionId: this.selectedSession,
      filterByDayId: this.selectedDay,
    });
  }

  async dismiss(data?: any) {
    await this.modalCtrl.dismiss(data);
  }
}
