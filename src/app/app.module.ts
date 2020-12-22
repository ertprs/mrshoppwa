import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';

import { DataService } from './services/database/data.service';
import { TabsPageModule } from './pages/tabs/tabs.module';
import { ServiceWorkerModule } from '@angular/service-worker';

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
import { IonicSwingModule } from '@app/components/ionic-swing/ionic-swing.module';
import { SwingModule } from 'angular2-swing';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { LandingPage } from './landing/landing.page';
import { AngularFireMessagingModule } from '@angular/fire/messaging';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, LandingPage],
  entryComponents: [],
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
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAPS_API_KEY,
      libraries: ['places'],
    }),
    AgmDirectionModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireMessagingModule,
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
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
    { provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend] }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
