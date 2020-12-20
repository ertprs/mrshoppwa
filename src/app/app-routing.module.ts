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
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then((m) => m.SignUpPageModule),
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('@app/pages/walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule),
    canLoad: [CheckTutorial],
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then((m) => m.AccountPageModule),
  },
 
  {
    path: 'walkthrough',
    loadChildren: () => import('@app/pages/walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule)
  },
  {
    path: 'video-large-card',
    loadChildren: () => import('@app/pages/video-playlists/largecard/largecard.module').then(m => m.LargecardPageModule)
  },
  {
    path: 'view-video',
    loadChildren: () => import('@app/pages/video-playlists/view-video/view-video.module').then(m => m.ViewVideoPageModule)
  },
  {
    path: 'youtube-home-playlist',
    loadChildren: () => import('@app/pages/video-playlists/youtube-home-playlist/youtube-home-playlist.module').then(m => m.YoutubeHomePlaylistPageModule)
  },
  {
    path: 'grid-youtube-playlist',
    loadChildren: () => import('@app/pages/video-playlists/youtube-playlist/youtube-playlist.module').then(m => m.YoutubePlaylistPageModule)
  },
  {
    path: 'phaser',
    loadChildren: () => import('@app/pages/phaser/phaser.module').then(m => m.PhaserPageModule)
  },

  {
    path: 'cart',
    loadChildren: () => import('@app/pages/woocommerce/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('@app/pages/woocommerce/checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'orderinfo',
    loadChildren: () => import('@app/pages/woocommerce/orderinfo/orderinfo.module').then(m => m.OrderinfoPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('@app/pages/woocommerce/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
  {
    path: 'woocommerce-products',
    loadChildren: () => import('@app/pages/woocommerce/woocommerce-products/woocommerce-products.module').then(m => m.WoocommerceProductsPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('@app/pages/woocommerce/orders/orders.module').then(m => m.OrdersPageModule)
  },
  {
    path: 'blogpage',
    loadChildren: () => import('@app/pages/wordpress/blogpage/blogpage.module').then(m => m.BlogpagePageModule)
  },
  {
    path: 'blogs/:id',
    loadChildren: () => import('@app/pages/wordpress/blogpage/blogpage.module').then(m => m.BlogpagePageModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('@app/pages/wordpress/blogs/blogs.module').then(m => m.BlogsPageModule)
  },
  {
    path: 'applepay',
    loadChildren: () => import('@app/pages/paymentGateways/applepay/applepay.module').then(m => m.ApplepayPageModule)
  },
  {
    path: 'paypalpayment',
    loadChildren: () => import('@app/pages/paymentGateways/paypalpayment/paypalpayment.module').then(m => m.PaypalpaymentPageModule)
  },
  {
    path: 'paypal-web',
    loadChildren: () => import('@app/pages/paymentGateways/paypal-web/paypal-web.module').then(m => m.PaypalWebPageModule)
  },
  {
    path: 'stripepayment',
    loadChildren: () => import('@app/pages/paymentGateways/stripepayment/stripepayment.module').then(m => m.StripepaymentPageModule)
  },
  {
    path: 'stripe-web',
    loadChildren: () => import('@app/pages/paymentGateways/stripe-web/stripe-web.module').then(m => m.StripeWebPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
