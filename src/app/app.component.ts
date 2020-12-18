import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserDataService } from './services/common/user-data.service';
import { InAppBrowserService } from './services/common/in-app-browser.service';
import { EventsService } from './services/common/events.service';
import { OnInit } from '@angular/core';
import { MovieTicketPage } from '@app/pages/card/movie-ticket/movie-ticket.page';
import { ModalController } from '@ionic/angular';
import { environment } from '@env/environment';
import { UtilService } from '@app/services/util/util.service';
import { AuthenticationService } from '@app/services/firestore/firebase-authentication.service';


interface PageInterface {
  title: string;
  name: string;
  path: string;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public sidemenu = null;
  public showChildren = '';
  public sidemenuLayout1: Array<any>;
  public beginnerMenu: Array<any>;
  public startupMenu: Array<any>;
  public proMenu: Array<any>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: Router,
    private authService: AuthenticationService,
    private util: UtilService,
    public modalCtrl: ModalController,
    private navCtrl: NavController,
    private userDataService: UserDataService,
    private menu: MenuController,
    private inAppBrowserService: InAppBrowserService,
    private router: Router,
    private eventsService: EventsService,
  ) {
    this.initializeApp();
    this.beginnerMenu = environment.BEGINNER_SIDEMENU;
    this.startupMenu = environment.STARTUP_SIDEMENU;
    this.proMenu = environment.PRO_SIDEMENU;
    this.sidemenuLayout1 = environment.SIDEMENU_LAYOUTS;
    // this.beginnerMenu = [];
    // this.startupMenu = [];
    // this.proMenu = [];
    // this.sidemenuLayout1 = environment.SIDEMENU_LAYOUTS;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // decide which menu items should be hidden by current login status stored in local storage
    this.userDataService.isUserAuthenticated().subscribe((isUserAuthenticated) => {
      this.enableMenu(isUserAuthenticated);
    });

    this.listenToLoginEvents();
  }

  showSidemenu(index: number) {
    this.sidemenu = index + 1;
  }

  expandMenu(title) {
    console.log('title', title);
    if (this.showChildren === title) {
      this.showChildren = '';
    } else {
      this.showChildren = title;
    }
    console.log(this.showChildren);
  }

  ngOnInit() {
  }
  async redirectPage(pageUrl, disabled) {
    if (disabled) {
      return;
    }
    if (pageUrl === '/movie-ticket') {
      const modal = await this.modalCtrl.create({
        component: MovieTicketPage
      });
      return modal.present();
    } else if (pageUrl === '/logout') {
      this.logout();
    } else if (pageUrl === '/product-details') {
      this.route.navigate([pageUrl, { id: 19 }]);
    } else {
      this.route.navigate([pageUrl]);
    }
  }

  logout() {
    console.log('logout');
    this.authService.logout().then(() => {
      this.util.navigate('login', false);
    });
  }

  appPages: PageInterface[] = [
    { title: 'Schedule', name: 'TabsPage', path: 'tabs/schedule', index: 0, icon: 'calendar' },
    { title: 'Speakers', name: 'TabsPage', path: 'tabs/speakers', index: 1, icon: 'person-circle' },
    { title: 'Map', name: 'TabsPage', path: 'tabs/map', index: 2, icon: 'map' },
    { title: 'About', name: 'TabsPage', path: 'tabs/about', index: 3, icon: 'information-circle' },
  ];

  loggedInPages: PageInterface[] = [
    { title: 'Account', name: 'AccountPage', path: 'account', icon: 'person' },
    { title: 'Logout', name: 'TabsPage', path: 'logout', icon: 'log-out', logsOut: true },
  ];

  loggedOutPages: PageInterface[] = [
    { title: 'Login', name: 'LoginPage', path: 'login', icon: 'log-in' },
    { title: 'Signup', name: 'SignUpPage', path: 'sign-up', icon: 'person-add' },
  ];


  openPage(page: PageInterface) {
    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      this.userDataService.signOut();
      this.navCtrl.navigateRoot('/tabs/schedule');
      this.eventsService.userLoggedOut(false);
    } else {
      this.navCtrl.navigateRoot('/account');
    }
  }

  openPrivacyPolicy(page: string) {
    this.inAppBrowserService.open(page);
  }

  isActive(p: PageInterface) {
    return this.router.isActive(p.path, true) ? 'primary' : null;
  }

  listenToLoginEvents() {
    this.eventsService.onUserLogin.subscribe((isMenuEnabled) => {
      this.enableMenu(isMenuEnabled);
    });

    this.eventsService.onUserSignUp.subscribe((isMenuEnabled) => {
      this.enableMenu(isMenuEnabled);
    });

    this.eventsService.onUserLogOut.subscribe((isMenuEnabled) => {
      this.enableMenu(isMenuEnabled);
    });
  }

  async enableMenu(loggedIn: boolean) {
    await this.menu.enable(loggedIn, 'loggedInMenu');
    await this.menu.enable(!loggedIn, 'loggedOutMenu');
  }
}


/*

<ion-menu menuId="loggedOutMenu" side="start" type="overlay" contentId="content">
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-menu-toggle auto-hide="false">
                        <ion-item button *ngFor="let p of appPages" routerDirection="root" [routerLink]="p.path">
                            <ion-icon slot="start" [name]="p.icon" routerLinkActive="active-link"></ion-icon>
                            {{p.title}}
                        </ion-item>

                        <ion-list-header>
                            <ion-label>Account</ion-label>
                        </ion-list-header>
                        <ion-item button *ngFor="let p of loggedOutPages" routerDirection="root" [routerLink]="p.path">
                            <ion-icon slot="start" [name]="p.icon" routerLinkActive="active-link"></ion-icon>
                            {{p.title}}
                        </ion-item>
                    </ion-menu-toggle>
                </ion-list>

                <div class="ion-padding">
                    <p>Copyright 2020<br>
                        <a (click)="openPrivacyPolicy('http://monthlyrepeat.com/')">Privacy Policy</a>
                    </p>
                    <small>Build:5.0.0</small>
                </div>
            </ion-content>
        </ion-menu>

        <ion-menu menuId="loggedInMenu" side="start" type="overlay" contentId="content">
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-menu-toggle auto-hide="false">
                        <ion-item button *ngFor="let p of appPages" routerDirection="root" [routerLink]="p.path">
                            <ion-icon slot="start" [name]="p.icon" routerLinkActive="active-link"></ion-icon>
                            {{p.title}}
                        </ion-item>

                        <ion-list-header>
                            <ion-label>Account</ion-label>
                        </ion-list-header>

                        <ion-item button *ngFor="let p of loggedInPages" (click)="openPage(p)">
                            <ion-icon slot="start" [name]="p.icon" [color]="isActive(p)"></ion-icon>
                            {{p.title}}
                        </ion-item>
                    </ion-menu-toggle>
                </ion-list>
            </ion-content>
        </ion-menu>
*/