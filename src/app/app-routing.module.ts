import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingPage } from './landing/landing.page';
import { CheckTutorial } from './services/common/check-tutorial.service';
import { DataResolverService } from './services/common/data-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: LandingPage,
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('@app/modules/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'sign-up',
    loadChildren: () => import('@app/modules/sign-up/sign-up.module').then((m) => m.SignUpPageModule),
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('@app/modules/walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule),
    canLoad: [CheckTutorial],
  },
  {
    path: 'account',
    loadChildren: () => import('@app/modules/account/account.module').then((m) => m.AccountPageModule),
  },
 
  {
    path: 'walkthrough',
    loadChildren: () => import('@app/modules/walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule)
  },
  {
    path: 'phaser',
    loadChildren: () => import('@app/modules/phaser/phaser.module').then(m => m.PhaserPageModule)
  },

  {
    path: 'blogpage',
    loadChildren: () => import('@app/modules/wordpress/blogpage/blogpage.module').then(m => m.BlogpagePageModule)
  },
  {
    path: 'blogs/:id',
    loadChildren: () => import('@app/modules/wordpress/blogpage/blogpage.module').then(m => m.BlogpagePageModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('@app/modules/wordpress/blogs/blogs.module').then(m => m.BlogsPageModule)
  },
  {
    path: 'applepay',
    loadChildren: () => import('@app/modules/paymentGateways/applepay/applepay.module').then(m => m.ApplepayPageModule)
  },
  {
    path: 'paypalpayment',
    loadChildren: () => import('@app/modules/paymentGateways/paypalpayment/paypalpayment.module').then(m => m.PaypalpaymentPageModule)
  },
  {
    path: 'paypal-web',
    loadChildren: () => import('@app/modules/paymentGateways/paypal-web/paypal-web.module').then(m => m.PaypalWebPageModule)
  },
  {
    path: 'stripepayment',
    loadChildren: () => import('@app/modules/paymentGateways/stripepayment/stripepayment.module').then(m => m.StripepaymentPageModule)
  },
  {
    path: 'stripe-web',
    loadChildren: () => import('@app/modules/paymentGateways/stripe-web/stripe-web.module').then(m => m.StripeWebPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
