import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { DataResolverService } from '@app/services/common/data-resolver.service';
import { GuardsService } from '@app/guards/guards.service';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'services',
        loadChildren: () => import('../schedule/schedule.module').then((m) => m.ScheduleModule),
        resolve: { isCache: DataResolverService },
      },
      {
        path: 'map',
        loadChildren: () => import('../map/map.module').then((m) => m.MapPageModule),
        resolve: { isCache: DataResolverService },
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then((m) => m.AboutPageModule),
        resolve: { isCache: DataResolverService },
      },
      {
        path: 'packs',
        loadChildren: () => import('../packs/netflix.module').then(m => m.NetflixPageModule)
      },
      {
        path: 'investments',
        loadChildren: () => import('../investment/investment.module').then(m => m.Investmentodule)
      },
      {
        path: 'finances',
        loadChildren: () => import('../abstracts/abstracts.module').then((m) => m.AbstractsModule),
        resolve: { isCache: DataResolverService },
      },
      {
        path: 'home',
        loadChildren: () => import('../speakers/speakers.module').then((m) => m.SpeakersModule),
        resolve: { isCache: DataResolverService },
        // canActivate: [GuardsService]
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/services',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}
