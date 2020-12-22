import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SpeakersListComponent } from './speakers-list/speakers-list.component';
import { SpeakerDetailComponent } from './speaker-detail/speaker-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SpeakersListComponent,
  },
  {
    path: ':id',
    component: SpeakerDetailComponent,
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
    SpeakersListComponent,
    SpeakerDetailComponent,
  ],
})
export class SpeakersModule { }
