import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './services/common/check-tutorial.service';
import { DataResolverService } from './services/common/data-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/walkthrough', pathMatch: 'full' },
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
    // canLoad: [CheckTutorial],
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then((m) => m.AccountPageModule),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'card-slider',
    loadChildren: () => import('@app/pages/card/card-slider/card-slider.module').then(m => m.CardSliderPageModule)
  },
  {
    path: 'event-card',
    loadChildren: () => import('@app/pages/card/event-card/event-card.module').then(m => m.EventCardPageModule)
  },
  {
    path: 'filtering-list',
    loadChildren: () => import('@app/pages/card/filtering-card/filtering-card.module').then(m => m.FilteringCardPageModule)
  },
  {
    path: 'large-card',
    loadChildren: () => import('@app/pages/card/large-card/large-card.module').then(m => m.LargeCardPageModule)
  },
  {
    path: 'movie-ticket',
    loadChildren: () => import('@app/pages/card/movie-ticket/movie-ticket.module').then(m => m.MovieTicketPageModule)
  },
  {
    path: 'product-card',
    loadChildren: () => import('@app/pages/card/product-card/product-card.module').then(m => m.ProductCardPageModule)
  },
  {
    path: 'sliders',
    loadChildren: () => import('@app/pages/card/sliders/sliders.module').then(m => m.SlidersPageModule)
  },
  {
    path: 'expandable-list',
    loadChildren: () => import('@app/pages/grid/expandable-list/expandable-list.module').then(m => m.ExpandableListPageModule)
  },
  {
    path: 'full-grid',
    loadChildren: () => import('@app/pages/grid/full-grid/full-grid.module').then(m => m.FullGridPageModule)
  },
  {
    path: 'grid-x2',
    loadChildren: () => import('@app/pages/grid/grid-x2/grid-x2.module').then(m => m.GridX2PageModule)
  },
  {
    path: 'grid-x3',
    loadChildren: () => import('@app/pages/grid/grid-x3/grid-x3.module').then(m => m.GridX3PageModule)
  },
  {
    path: 'masonry-grid',
    loadChildren: () => import('@app/pages/grid/masonry-grid/masonry-grid.module').then(m => m.MasonryGridPageModule)
  },
  {
    path: 'shop-grid',
    loadChildren: () => import('@app/pages/grid/shop-grid/shop-grid.module').then(m => m.ShopGridPageModule)
  },
  {
    path: 'square-grid',
    loadChildren: () => import('@app/pages/grid/square-grid/square-grid.module').then(m => m.SquareGridPageModule)
  },
  {
    path: 'card8',
    loadChildren: () => import('@app/pages/card/card8/card8.module').then(m => m.Card8PageModule)
  },
  {
    path: 'login-1',
    loadChildren: () => import('@app/pages/loginSignups/login1/login1.module').then(m => m.Login1PageModule)
  },
  {
    path: 'login-2',
    loadChildren: () => import('@app/pages/loginSignups/login2/login2.module').then(m => m.Login2PageModule)
  },
  {
    path: 'login-3',
    loadChildren: () => import('@app/pages/loginSignups/login3/login3.module').then(m => m.Login3PageModule)
  },
  {
    path: 'register-1',
    loadChildren: () => import('@app/pages/loginSignups/register1/register1.module').then(m => m.Register1PageModule)
  },
  {
    path: 'home',
    // canActivate: [GuardsService],
    loadChildren: () => import('@app/pages/firebase/firebase-home/firebase-home.module').then(m => m.FirebaseHomePageModule)
  },
  {
    path: 'image-upload',
    loadChildren: () => import('@app/pages/firebase/image-upload/image-upload.module').then(m => m.ImageUploadPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('@app/pages/firebase/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('@app/pages/firebase/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'insta',
    loadChildren: () => import('@app/pages/layouts/insta/insta.module').then(m => m.InstaPageModule)
  },
  {
    path: 'instaprofile',
    loadChildren: () => import('@app/pages/layouts/instaprofile/instaprofile.module').then(m => m.InstaprofilePageModule)
  },
  {
    path: 'insta-tabs',
    loadChildren: () => import('@app/pages/layouts/insta-tabs/insta-tabs.module').then(m => m.InstaTabsPageModule)
  },
  {
    path: 'netflix',
    loadChildren: () => import('@app/pages/layouts/netflix/netflix.module').then(m => m.NetflixPageModule)
  },
  {
    path: 'uber-map-flow',
    loadChildren: () => import('@app/pages/layouts/uber-map-flow/uber-map-flow.module').then(m => m.UberMapFlowPageModule)
  },
  {
    path: 'whatsapp',
    loadChildren: () => import('@app/pages/layouts/whatsapp/whatsapp.module').then(m => m.WhatsappPageModule)
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
    path: 'slider',
    loadChildren: () => import('@app/pages/slider/slider.module').then(m => m.SliderPageModule)
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
    path: 'admob',
    loadChildren: () => import('@app/pages/addons/admob/admob.module').then(m => m.AdmobPageModule)
  },
  {
    path: 'content-loader',
    loadChildren: () => import('@app/pages/addons/content-loader/content-loader.module').then(m => m.ContentLoaderPageModule)
  },
  {
    path: 'content-loader2',
    loadChildren: () => import('@app/pages/addons/content-loader2/content-loader2.module').then(m => m.ContentLoader2PageModule)
  },
  {
    path: 'cropper',
    loadChildren: () => import('@app/pages/addons/cropper/cropper.module').then(m => m.CropperPageModule)
  },
  {
    path: 'customfonts',
    loadChildren: () => import('@app/pages/addons/customfonts/customfonts.module').then(m => m.CustomfontsPageModule)
  },
  {
    path: 'datetimepickers',
    loadChildren: () => import('@app/pages/addons/datetime-pickers/datetime-pickers.module').then(m => m.DatetimePickersPageModule)
  },
  {
    path: 'infinite',
    loadChildren: () => import('@app/pages/addons/infinite/infinite.module').then(m => m.InfinitePageModule)
  },
  {
    path: 'refresh',
    loadChildren: () => import('@app/pages/addons/refresh/refresh.module').then(m => m.RefreshPageModule)
  },
  {
    path: 'reorder',
    loadChildren: () => import('@app/pages/addons/reorder/reorder.module').then(m => m.ReorderPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('@app/pages/addons/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'translate',
    loadChildren: () => import('@app/pages/addons/translate/translate.module').then(m => m.TranslatePageModule)
  },
  {
    path: 'bar-code',
    loadChildren: () => import('@app/pages/addons3/bar-code/bar-code.module').then(m => m.BarCodePageModule)
  },
  {
    path: 'google-autocomplete',
    loadChildren: () => import('@app/pages/addons3/google-autocomplete/google-autocomplete.module').then(m => m.GoogleAutocompletePageModule)
  },
  {
    path: 'google-places',
    loadChildren: () => import('@app/pages/addons3/google-places/google-places.module').then(m => m.GooglePlacesPageModule)
  },
  {
    path: 'in-app-browser',
    loadChildren: () => import('@app/pages/addons3/in-app-browser/in-app-browser.module').then(m => m.InAppBrowserPageModule)
  },
  {
    path: 'local-notification',
    loadChildren: () => import('@app/pages/addons3/local-notification/local-notification.module').then(m => m.LocalNotificationPageModule)
  },
  {
    path: 'map-direction',
    loadChildren: () => import('@app/pages/addons3/map-direction/map-direction.module').then(m => m.MapDirectionPageModule)
  },
  {
    path: 'social-share',
    loadChildren: () => import('@app/pages/addons3/social-share/social-share.module').then(m => m.SocialSharePageModule)
  },
  {
    path: 'sweet-alert',
    loadChildren: () => import('@app/pages/addons3/sweet-alert/sweet-alert.module').then(m => m.SweetAlertPageModule)
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
  },
  {
    path: 'artboard',
    loadChildren: () => import('@app/pages/chat/artboard/artboard.module').then(m => m.ArtboardPageModule)
  },
  {
    path: 'blocks',
    loadChildren: () => import('@app/pages/chat/blocks/blocks.module').then(m => m.BlocksPageModule)
  },
  {
    path: 'breeze',
    loadChildren: () => import('@app/pages/chat/breeze/breeze.module').then(m => m.BreezePageModule)
  },
  {
    path: 'bubble',
    loadChildren: () => import('@app/pages/chat/bubble/bubble.module').then(m => m.BubblePageModule)
  },
  {
    path: 'bubble2',
    loadChildren: () => import('@app/pages/chat/bubble2/bubble2.module').then(m => m.Bubble2PageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('@app/pages/chat/business/business.module').then(m => m.BusinessPageModule)
  },
  {
    path: 'classic',
    loadChildren: () => import('@app/pages/chat/classic/classic.module').then(m => m.ClassicPageModule)
  },
  {
    path: 'classic-chatlist',
    loadChildren: () => import('@app/pages/chat/classic-chatlist/classic-chatlist.module').then(m => m.ClassicChatlistPageModule)
  },
  {
    path: 'elegance',
    loadChildren: () => import('@app/pages/chat/elegance/elegance.module').then(m => m.ElegancePageModule)
  },
  {
    path: 'fluid',
    loadChildren: () => import('@app/pages/chat/fluid/fluid.module').then(m => m.FluidPageModule)
  },
  {
    path: 'minimal',
    loadChildren: () => import('@app/pages/chat/minimal/minimal.module').then(m => m.MinimalPageModule)
  },
  {
    path: 'pastry',
    loadChildren: () => import('@app/pages/chat/pastry/pastry.module').then(m => m.PastryPageModule)
  },
  {
    path: 'rose',
    loadChildren: () => import('@app/pages/chat/rose/rose.module').then(m => m.RosePageModule)
  },
  {
    path: 'rose-list',
    loadChildren: () => import('@app/pages/chat/rose-list/rose-list.module').then(m => m.RoseListPageModule)
  },
  {
    path: 'starbucks',
    loadChildren: () => import('@app/pages/chat/starbucks/starbucks.module').then(m => m.StarbucksPageModule)
  },
  {
    path: 'tinder-cards',
    loadChildren: () => import('@app/pages/layouts/tinder/home/home.module').then(m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
