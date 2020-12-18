import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.scss'],
})
export class SessionDetailComponent implements OnInit {
  session: any;

  constructor(
    private scheduleService: ScheduleService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.session = this.scheduleService.getCurrent();

    if (!this.session) {
      this.init();
    }
  }

  init() {
    this.activatedRoute.params.subscribe((params) => {
      this.scheduleService.getScheduleDays(false, '', '', '')
        .then((days) => {
          this.session = (days as any[]).filter((day) => {
            return day.type === 'subsession';
          })
          .find((day) => {
            return day.subsession.$key === params.id;
          });
        });
    });
  }

  isInFavorites(id) {
    return this.scheduleService.isInFavorites(id);
  }

  toggleFavorites(id) {
    this.scheduleService.toggleFavorites(id);
  }
}
