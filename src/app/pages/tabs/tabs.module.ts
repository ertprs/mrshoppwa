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
        path: 'about',
        loadChildren: () => import('@app/modules/about/about.module').then((m) => m.AboutPageModule),
        resolve: { isCache: DataResolverService },
      },
      {
        path: 'packs',
        loadChildren: () => import('@app/modules/packs/products/woocommerce-products.module').then(m => m.WoocommerceProductsPageModule)
      },
      {
        path: 'pack-details',
        loadChildren: () => import('@app/modules/packs/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
      },
      {
        path: 'services',
        loadChildren: () => import('@app/modules/services/products/woocommerce-products.module').then(m => m.WoocommerceProductsPageModule)
      },
      {
        path: 'investments',
        loadChildren: () => import('@app/modules/investments/products/woocommerce-products.module').then(m => m.WoocommerceProductsPageModule)
      },
      {
        path: 'finances',
        loadChildren: () => import('@app/modules/finances/products/woocommerce-products.module').then(m => m.WoocommerceProductsPageModule)
      },
      {
        path: 'product-details',
        loadChildren: () => import('@app/modules/packs/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('@app/modules/cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('@app/modules/checkout/checkout.module').then(m => m.CheckoutPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('@app/modules/home/speakers.module').then(m => m.SpeakersModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('@app/modules/profile/profile.module').then(m => m.ProfilePageModule)
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
export class TabsPageModule { }
