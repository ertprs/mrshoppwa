import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { DataResolverService } from '@app/services/common/data-resolver.service';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        loadChildren: () => import('../schedule/schedule.module').then((m) => m.ScheduleModule),
        resolve: { isCache: DataResolverService },
      },
      {
        path: 'speakers',
        loadChildren: () => import('../speakers/speakers.module').then((m) => m.SpeakersModule),
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
      // {
      //   path: 'woocommerce-products',
      //   loadChildren: () => import('../woocommerce/woocommerce-products/woocommerce-products.module').then((m) => m.WoocommerceProductsPageModule),
      // },
      {
        path: 'woocommerce-products',
        loadChildren: () => import('../layouts/netflix/netflix.module').then(m => m.NetflixPageModule)
      },
      {
        path: 'investments',
        loadChildren: () => import('../investment/investment.module').then(m => m.Investmentodule)
      },
      {
        path: '',
        redirectTo: '/tabs/schedule',
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
