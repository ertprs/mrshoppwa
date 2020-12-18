import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SponsorComponent } from './sponsor/sponsor.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

const routes: Routes = [
  {
    path: '',
    component: SponsorsComponent,
  },
  {
    path: ':id',
    component: SponsorComponent,
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
    SponsorsComponent,
    SponsorComponent,
  ],
})
export class SponsorsModule { }
