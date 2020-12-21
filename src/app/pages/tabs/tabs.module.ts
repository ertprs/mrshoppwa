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
      // {
      //   path: 'services',
      //   loadChildren: () => import('../schedule/schedule.module').then((m) => m.ScheduleModule),
      //   resolve: { isCache: DataResolverService },
      // },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then((m) => m.AboutPageModule),
        resolve: { isCache: DataResolverService },
      },
      {
        path: 'packs',
        loadChildren: () => import('../../modules/packs/products/woocommerce-products.module').then(m => m.WoocommerceProductsPageModule)
      },
      {
        path: 'services',
        loadChildren: () => import('../../modules/services/products/woocommerce-products.module').then(m => m.WoocommerceProductsPageModule)
      },
      {
        path: 'investments',
        loadChildren: () => import('../../modules/investments/products/woocommerce-products.module').then(m => m.WoocommerceProductsPageModule)
      },
      {
        path: 'finances',
        loadChildren: () => import('../../modules/finances/products/woocommerce-products.module').then(m => m.WoocommerceProductsPageModule)
      },
      {
        path: 'product-details',
        loadChildren: () => import('./../../modules/packs/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
      },
      {
        path: 'woocommerce-products',
        loadChildren: () => import('./../../modules/packs/products/woocommerce-products.module').then(m => m.WoocommerceProductsPageModule)
      },

      // {
      //   path: 'packs2',
      //   loadChildren: () => import('../packs/netflix.module').then(m => m.NetflixPageModule)
      // },
      // {
      //   path: 'investments',
      //   loadChildren: () => import('../investment/investment.module').then(m => m.Investmentodule)
      // },
      // {
      //   path: 'finances',
      //   loadChildren: () => import('../abstracts/abstracts.module').then((m) => m.AbstractsModule),
      //   resolve: { isCache: DataResolverService },
      // },
      {
        path: 'home',
        loadChildren: () => import('../home/speakers.module').then((m) => m.SpeakersModule),
        resolve: { isCache: DataResolverService },
        // canActivate: [GuardsService]
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
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
