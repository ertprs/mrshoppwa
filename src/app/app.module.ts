import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DATA_SERVICE, DataServiceType, firebaseConfig } from 'src/config';
import { HttpDataService } from './services/database/http-data.service';
import { FirebaseDataService } from './services/database/firebase-data.service';
import { DataService } from './services/database/data.service';
import { TabsPageModule } from './pages/tabs/tabs.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: DataService, useFactory: getDataService, deps: [HttpClient, AngularFireDatabase] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
