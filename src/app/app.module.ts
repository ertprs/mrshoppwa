import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';

import { DATA_SERVICE, DataServiceType, firebaseConfig } from 'config/config';
import { HttpDataService } from './services/database/http-data.service';
import { FirebaseDataService } from './services/database/firebase-data.service';
import { DataService } from './services/database/data.service';
import { TabsPageModule } from './pages/tabs/tabs.module';
import { ServiceWorkerModule } from '@angular/service-worker';

export function getDataService(http: HttpClient, db: AngularFireDatabase) {
  switch (DATA_SERVICE) {
    case DataServiceType.http:
      return new HttpDataService(http);
    case DataServiceType.firebase:
      return new FirebaseDataService(db);
    default:
      throw new Error('Unknown service');
  }
}

import { NgModule } from '@angular/core';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { Platform } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpBackend, HttpXhrBackend } from '@angular/common/http';
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { ViewVideoPage } from '@app/pages/video-playlists/view-video/view-video.page';
import { OrderinfoPage } from '@app/pages/woocommerce/orderinfo/orderinfo.page';
import { MapDirectionPage } from '@app/pages/addons3/map-direction/map-direction.page';

import { environment } from '@env/environment';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ApplePay } from '@ionic-native/apple-pay/ngx';
import { PayPal } from '@ionic-native/paypal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Device } from '@ionic-native/device/ngx';
import { TindericonsComponent } from '@app/pages/layouts/tinder/tindericons/tindericons.component';
import { MovieTicketPage } from '@app/pages/card/movie-ticket/movie-ticket.page';
import { IonicSwingModule } from '@app/components/ionic-swing/ionic-swing.module';
import { SwingModule } from 'angular2-swing';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { LandingPage } from './landing/landing.page';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, MovieTicketPage, ViewVideoPage, OrderinfoPage, MapDirectionPage, TindericonsComponent, LandingPage],
  entryComponents: [ViewVideoPage, MovieTicketPage, OrderinfoPage, MapDirectionPage, TindericonsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NativeHttpModule,
    IonicModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AngularFireModule.initializeApp(environment.config),
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAPS_API_KEY,
      libraries: ['places'],
    }),
    AgmDirectionModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    IonicSwingModule,
    SwingModule,
    IonicStorageModule.forRoot(),
    AppRoutingModule,

    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    TabsPageModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    GooglePlus,
    Facebook,
    TwitterConnect,
    GoogleMapsAPIWrapper,
    AdMobPro,
    Base64,
    Crop,
    BarcodeScanner,
    InAppBrowser,
    LocalNotifications,
    SocialSharing,
    ApplePay,
    PayPal,
    Stripe,
    Device,
    WebView,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend] },
    { provide: DataService, useFactory: getDataService, deps: [HttpClient, AngularFireDatabase] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
