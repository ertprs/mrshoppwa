import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleFilterComponent } from './schedule-filter/schedule-filter.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
  },
  {
    path: ':id',
    component: SessionDetailComponent,
  },
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  declarations: [
    ScheduleComponent,
    ScheduleFilterComponent,
    SessionDetailComponent,
  ],
  entryComponents: [
    ScheduleFilterComponent,
  ],
})
export class ScheduleModule { }
