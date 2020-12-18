import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserDataService } from './services/common/user-data.service';
import { InAppBrowserService } from './services/common/in-app-browser.service';
import { EventsService } from './services/common/events.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  appPages: PageInterface[] = [
    { title: 'Schedule', name: 'TabsPage', path: 'tabs/schedule', index: 0, icon: 'calendar' },
    { title: 'Abstracts', name: 'AbstractsPage', path: 'abstracts', icon: 'documents' },
    { title: 'Events', name: 'EventsPage', path: 'events', icon: 'alarm' },
    { title: 'Committees', name: 'CommitteesPage', path: 'committees', icon: 'people' },
    { title: 'Sponsors', name: 'SponsorsPage', path: 'sponsors', icon: 'logo-usd' },
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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private userDataService: UserDataService,
    private menu: MenuController,
    private inAppBrowserService: InAppBrowserService,
    private router: Router,
    private eventsService: EventsService,
  ) {
    this.initializeApp();
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
