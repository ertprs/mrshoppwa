import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserDataService } from './services/common/user-data.service';
import { InAppBrowserService } from './services/common/in-app-browser.service';
import { EventsService } from './services/common/events.service';
import { OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from '@env/environment';
import { UtilService } from '@app/services/util/util.service';
import { AuthenticationService } from '@app/services/firestore/firebase-authentication.service';
import { SwUpdate } from '@angular/service-worker';
import { Observable, fromEvent, merge, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { FirebaseMessagingService } from './services/firestore/firebase-messaging.service';


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
    public sidemenuLayout1: Array<any> = [];
    public beginnerMenu: Array<any> = [];
    public startupMenu: Array<any> = [];
    public proMenu: Array<any> = [];

    message;

    testMessages() {
        const userId = 'user001';
        this.messagingService.requestPermission(userId)
        this.messagingService.receiveMessage()
        this.message = this.messagingService.currentMessage
    }

    appPages: PageInterface[] = [
        { title: 'Home', name: 'AbstractsPage', path: 'tabs/home', icon: 'documents' },
        { title: 'Packs', name: 'TabsPage', path: 'tabs/packs', index: 0, icon: 'calendar' },
        { title: 'Services', name: 'TabsPage', path: 'tabs/services', index: 1, icon: 'person-circle' },
        { title: 'Investments', name: 'TabsPage', path: 'tabs/investments', index: 0, icon: 'calendar' },
        { title: 'Finance', name: 'TabsPage', path: 'tabs/finances', index: 0, icon: 'calendar' },
        { title: 'Game', name: 'GamesPage', path: 'phaser', index: 0, icon: 'heart' },
        { title: 'About', name: 'TabsPage', path: 'tabs/about', index: 3, icon: 'information-circle' },
    ];

    logicalPages: PageInterface[] = [
        { title: 'Profile', name: 'ProfilePage', path: 'tabs/profile', icon: 'person' },
        // { title: 'Logout', name: 'TabsPage', path: 'logout', icon: 'log-out', logsOut: true },

        { title: 'Login', name: 'LoginPage', path: 'login', icon: 'log-in' },
        // { title: 'Signup', name: 'SignUpPage', path: 'sign-up', icon: 'person-add' },
    ];

    online$: Observable<boolean>;
    isLoggedIn = false;
    isPageInit = false;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private route: Router,
        private messagingService: FirebaseMessagingService,
        private authService: AuthenticationService,
        private util: UtilService,
        public modalCtrl: ModalController,
        private navCtrl: NavController,
        public userDataService: UserDataService,
        private menu: MenuController,
        private inAppBrowserService: InAppBrowserService,
        private router: Router,
        private eventsService: EventsService,
        private swUpdate: SwUpdate,
        private storage: Storage
    ) {
        this.initializeApp();
        this.menu.enable(false, 'appMenu');
        // this.beginnerMenu = environment.BEGINNER_SIDEMENU;
        // this.startupMenu = environment.STARTUP_SIDEMENU;
        // this.proMenu = environment.PRO_SIDEMENU;
        // this.sidemenuLayout1 = environment.SIDEMENU_LAYOUTS;
        this.online$ = merge(
            of(navigator.onLine),
            fromEvent(window, 'online').pipe(mapTo(true)),
            fromEvent(window, 'offline').pipe(mapTo(false))
        )
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
        window.addEventListener('beforeinstallprompt', e => {
            e.preventDefault();
            this.userDataService.customInstallPrompt = e;
        });
        if (this.swUpdate.available) {
            this.swUpdate.available.subscribe(() => {
                if (confirm('A new version is available. Load it?'))
                    window.location.reload();
            });
        }

        // decide which menu items should be hidden by current login status stored in local storage
        this.userDataService.getUser().subscribe((user) => {
            const isUserValid = !!user;
            console.log(user);
            setTimeout(() => {
                console.log(`Prompting for installation`);
                // this.userDataService.customInstallPrompt.prompt();
            }, 10000);
            if (isUserValid) {
                this.isLoggedIn = isUserValid;
            }
            else {
            }
        });

        this.listenToLoginEvents();
    }

    ngOnInit() {
        this.testMessages();
    }

    goToLanding() {
        this.menu.enable(false);
        this.route.navigate(['/']);
    }

    disableWalkthrough() {
        this.storage.set('hasSeenTutorial', false)
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

    async redirectPage(pageUrl, disabled) {
        if (disabled) {
            return;
        }
        else if (pageUrl === '/logout') {
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

    openPage(page: PageInterface) {
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userDataService.signOut();
            this.navCtrl.navigateRoot('/tabs/home');
            this.eventsService.userLoggedOut(false);
        } else {
            this.navCtrl.navigateRoot(`${page.path}`);
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
        await this.menu.enable(loggedIn, 'appMenu');
    }
}
