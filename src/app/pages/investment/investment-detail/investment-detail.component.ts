import { Component, OnInit } from '@angular/core';
import { InvestmentService } from '../investment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investment-detail',
  templateUrl: './investment-detail.component.html',
  styleUrls: ['./investment-detail.component.scss'],
})
export class InvestmentDetailComponent implements OnInit {
  session: any;

  constructor(
    private scheduleService: InvestmentService,
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
