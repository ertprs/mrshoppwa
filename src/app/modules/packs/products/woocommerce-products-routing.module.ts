/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoocommerceProductsPage } from './woocommerce-products.page';

const routes: Routes = [
  {
    path: '',
    component: WoocommerceProductsPage,
    children: [
      {
        path: 'pack-details',
        loadChildren: () => import('../product-details/product-details.module').then((m) => m.ProductDetailsPageModule),
      }]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoocommerceProductsPageRoutingModule {}
