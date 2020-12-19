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
    public sidemenuLayout1: Array<any> = [];
    public beginnerMenu: Array<any> = [];
    public startupMenu: Array<any> = [];
    public proMenu: Array<any> = [];

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
        // this.beginnerMenu = environment.BEGINNER_SIDEMENU;
        // this.startupMenu = environment.STARTUP_SIDEMENU;
        // this.proMenu = environment.PRO_SIDEMENU;
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
        { title: 'Home', name: 'AbstractsPage', path: 'tabs/home', icon: 'documents' },
        { title: 'Packs', name: 'TabsPage', path: 'tabs/packs', index: 0, icon: 'calendar' },
        { title: 'Services', name: 'TabsPage', path: 'tabs/services', index: 1, icon: 'person-circle' },
        { title: 'Investments', name: 'TabsPage', path: 'tabs/investments', index: 0, icon: 'calendar' },
        { title: 'Finance', name: 'TabsPage', path: 'tabs/finances', index: 0, icon: 'calendar' },
        // { title: 'Map', name: 'TabsPage', path: 'tabs/map', index: 2, icon: 'map' },
        { title: 'About', name: 'TabsPage', path: 'tabs/about', index: 3, icon: 'information-circle' },
    ];

    logicalPages: PageInterface[] = [
        { title: 'Profile', name: 'ProfilePage', path: 'tabs/profile', icon: 'person' },
        // { title: 'Logout', name: 'TabsPage', path: 'logout', icon: 'log-out', logsOut: true },

        { title: 'Login', name: 'LoginPage', path: 'login', icon: 'log-in' },
        // { title: 'Signup', name: 'SignUpPage', path: 'sign-up', icon: 'person-add' },
    ];

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

    isLoggedIn = false;

    async enableMenu(loggedIn: boolean) {
        this.isLoggedIn = loggedIn;
        // await this.menu.enable(loggedIn, 'loggedInMenu');
        // await this.menu.enable(!loggedIn, 'loggedOutMenu');
    }
}


/*
<ion-app>
    <ion-split-pane contentId="main-content">

        <ion-menu contentId="main-content" type="overlay" class="left-menu" side="start">
            <ion-header class="head">
                <div class="enappd-header">
                    <div class="logo">
                        <img src="assets/logo-ionic-white.png" />
                    </div>
                    <div class="title">monthlyrepeat.com</div>
                    <div class="subtitle">Be Lazy </div>
                </div>
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

                <!--Beginner Features-->
                <ion-list class="list-padd ion-no-margin ion-no-padding">
                    <ion-list-header>
                        <ion-label>Beginner Features</ion-label>
                    </ion-list-header>
                    <div *ngFor="let p of beginnerMenu">
                        <div *ngIf="p.children && !p.module">
                            <ion-item detail (click)="expandMenu(p.title)">
                                <ion-icon slot="start" [name]="p.icon"></ion-icon>
                                <ion-label>
                                    {{ p.title }}
                                </ion-label>
                            </ion-item>
                            <div class="zero-h" [ngClass]="{'animate-expand': (showChildren == p.title)}">
                                <ion-menu-toggle auto-hide="false" *ngFor="let option of p.children">
                                    <ion-item class="ion-padding-start" [ngClass]="{'disabled':option.disabled}"
                                        (click)="redirectPage(option.url, option.disabled)">
                                        <ion-icon slot="start" [name]="option.icon"></ion-icon>
                                        <ion-label>
                                            {{ option.title }}
                                        </ion-label>
                                    </ion-item>
                                </ion-menu-toggle>
                            </div>
                        </div>
                        <div *ngIf="p.children && p.module == 'sidemenu'">
                            <ion-item detail (click)="expandMenu(p.title)">
                                <ion-icon slot="start" [name]="p.icon"></ion-icon>
                                <ion-label>
                                    {{ p.title }}
                                </ion-label>
                            </ion-item>
                            <div *ngIf="showChildren == p.title" class="zero-h"
                                [ngClass]="{'animate-expand': (showChildren == p.title)}">
                                <ion-menu-toggle auto-hide="false" *ngFor="let option of p.children;let i = index">
                                    <ion-menu-button autoHide="false" menu="end">
                                        <ion-item (click)="showSidemenu(i)" class="ion-padding-start"
                                            [routerLink]="[option.url]">
                                            <ion-icon slot="start" [name]="option.icon"></ion-icon>
                                            <ion-label>
                                                {{ option.title }}
                                            </ion-label>
                                        </ion-item>
                                    </ion-menu-button>
                                </ion-menu-toggle>
                            </div>
                        </div>
                        <div *ngIf="!p.children">
                            <ion-menu-toggle auto-hide="false">
                                <ion-item [routerLink]="[p.url]" detail>
                                    <ion-icon slot="start" [name]="p.icon"></ion-icon>
                                    <ion-label>
                                        {{ p.title }}
                                    </ion-label>
                                </ion-item>
                            </ion-menu-toggle>
                        </div>
                    </div>
                </ion-list>

                <!--Startup Features-->
                <ion-list class="list-padd ion-no-margin ion-no-padding">
                    <ion-list-header>
                        <ion-label>Startup Features</ion-label>
                    </ion-list-header>
                    <div *ngFor="let p of startupMenu">
                        <div *ngIf="p.children && !p.module">
                            <ion-item detail (click)="expandMenu(p.title)">
                                <ion-icon slot="start" [name]="p.icon"></ion-icon>
                                <ion-label>
                                    {{ p.title }}
                                </ion-label>
                            </ion-item>
                            <div class="zero-h" [ngClass]="{'animate-expand': (showChildren == p.title)}">
                                <ion-menu-toggle auto-hide="false" *ngFor="let option of p.children">
                                    <ion-item class="ion-padding-start" [ngClass]="{'disabled':option.disabled}"
                                        (click)="redirectPage(option.url, option.disabled)">
                                        <ion-icon slot="start" [name]="option.icon"></ion-icon>
                                        <ion-label>
                                            {{ option.title }}
                                        </ion-label>
                                    </ion-item>
                                </ion-menu-toggle>
                            </div>
                        </div>
                        <div *ngIf="p.children && p.module=='sidemenu'">
                            <ion-item detail (click)="expandMenu(p.title)">
                                <ion-icon slot="start" [name]="p.icon"></ion-icon>
                                <ion-label>
                                    {{ p.title }}
                                </ion-label>
                            </ion-item>
                            <div *ngIf="showChildren == p.title">
                                <div class="option_menu-button" *ngFor="let option of p.children;let i = index">
                                    <ion-menu-button autoHide="false" menu="end">
                                        <ion-item (click)="showSidemenu(i)" class="ion-padding-start"
                                            [routerLink]="[option.url]">
                                            <ion-icon slot="start" [name]="option.icon"></ion-icon>
                                            <ion-label>
                                                {{ option.title }}
                                            </ion-label>
                                        </ion-item>
                                    </ion-menu-button>
                                </div>
                            </div>
                        </div>
                        <div *ngIf="!p.children">
                            <ion-menu-toggle auto-hide="false">
                                <ion-item [routerLink]="[p.url]" detail>
                                    <ion-icon slot="start" [name]="p.icon"></ion-icon>
                                    <ion-label>
                                        {{ p.title }}
                                    </ion-label>
                                </ion-item>
                            </ion-menu-toggle>
                        </div>
                    </div>
                </ion-list>

                <!--Pro Features-->
                <ion-list class="list-padd ion-no-margin ion-no-padding">
                    <ion-list-header>
                        <ion-label>Pro Features</ion-label>
                    </ion-list-header>
                    <div *ngFor="let p of proMenu">
                        <div *ngIf="p.children && !p.module">
                            <ion-item detail (click)="expandMenu(p.title)">
                                <ion-icon slot="start" [name]="p.icon"></ion-icon>
                                <ion-label>
                                    {{ p.title }}
                                </ion-label>
                            </ion-item>
                            <div *ngIf="showChildren == p.title">
                                <ion-menu-toggle class="ion-menu-toggle" auto-hide="false"
                                    *ngFor="let option of p.children">
                                    <ion-item class="ion-padding-start" [ngClass]="{'disabled':option.disabled}"
                                        (click)="redirectPage(option.url, option.disabled)">
                                        <ion-icon slot="start" [name]="option.icon"></ion-icon>
                                        <ion-label class="menu-label">
                                            {{ option.title }} <ion-icon *ngIf="option.device" name="phone-portrait"
                                                color="primary">
                                            </ion-icon>
                                            <ion-icon *ngIf="option.apple" name="logo-apple" color="primary"></ion-icon>
                                        </ion-label>
                                    </ion-item>
                                </ion-menu-toggle>
                            </div>
                        </div>
                        <div *ngIf="!p.children">
                            <div auto-hide="false">
                                <ion-item detail [routerLink]="[p.url]">
                                    <ion-icon slot="start" [name]="p.icon"></ion-icon>
                                    <ion-label>
                                        {{ p.title }}
                                    </ion-label>
                                </ion-item>
                            </div>
                        </div>
                    </div>
                </ion-list>



            </ion-content>
        </ion-menu>

        <!-- Profile -->
        <ion-menu class="sidemenu-1" *ngIf="sidemenu==5" side="end" type="overlay" contentId="main-content">
            <ion-content class="contentBg">
                <div>
                    <ion-card slot="fixed" class="driverCard fixed ion-no-margin ion-no-padding" color="primary">
                        <ion-item lines="none" class="ion-padding-vertical">
                            <div class="driverProfileImage">
                                <ion-avatar slot="start" class="profile">
                                    <img src="assets/map/driver.jpeg">
                                </ion-avatar>
                                <div class="ion-margin-start">
                                    <h3 class="userName ion-no-margin">John Doe</h3>
                                    <span class="userDetails">
                                        <ion-icon name="star"></ion-icon>Premium Member
                                    </span>
                                </div>
                            </div>
                        </ion-item>

                        <ion-card-content class="ion-no-margin ion-no-padding">
                            <div class="cardContent">
                                <div class="driverDetails">
                                    <ion-icon name="time" class="driverStatusIcons"></ion-icon>
                                    <ion-label class="textColor textBold detailsLabel">10.2</ion-label>
                                    <p class="detailText ion-text-uppercase">Hours Online</p>
                                </div>
                                <div class="driverDetails">
                                    <ion-icon name="speedometer" class="driverStatusIcons"></ion-icon>
                                    <ion-label class="textColor textBold detailsLabel ion-text-uppercase">30 KM
                                    </ion-label>
                                    <p class="detailText">Total Distance</p>
                                </div>
                                <div class="driverDetails">
                                    <ion-icon name="time" class="driverStatusIcons"></ion-icon>
                                    <ion-label class="textColor textBold detailsLabel ">20</ion-label>
                                    <p class="detailText ion-text-uppercase">Total Jobs</p>
                                </div>
                            </div>

                        </ion-card-content>
                    </ion-card>
                </div>
                <ion-list lines="none" class="ion-padding-top">
                    <ion-menu-toggle auto-hide="false" *ngFor="let item of sidemenuLayout1" menu="end">
                        <ion-item>
                            <ion-icon slot="start" [name]="item.icon" [ngClass]="{'active':item.active}"></ion-icon>
                            <ion-label [ngClass]="{'active':item.active}">
                                {{item.title}}
                            </ion-label>
                        </ion-item>
                    </ion-menu-toggle>
                </ion-list>
            </ion-content>
        </ion-menu>
        <!-- Small Grid -->
        <ion-menu class="sidemenu-2" *ngIf="sidemenu==2" side="end" type="overlay" contentId="main-content">
            <ion-content>
                <div class="content">
                    <div class="profile-block">
                        <div class="profile-image">
                            <img src="../assets/chat/chat/chat1.jpg" />
                        </div>
                        <ion-text color="light">Jane Braun</ion-text>
                    </div>
                    <div class="menu">
                        <div class="menu-item" *ngFor="let item of sidemenuLayout1">
                            <div class="block" [ngClass]="{'active':item.active}">
                                <div class="icon">
                                    <ion-icon slot="start" [name]="item.icon" [ngClass]="{'active':item.active}">
                                    </ion-icon>
                                </div>
                                <div class="text" [ngClass]="{'active':item.active}">
                                    {{item.title}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ion-content>
        </ion-menu>
        <!-- Full Screen -->
        <ion-menu class="sidemenu-3" *ngIf="sidemenu==3" side="end" type="overlay" contentId="main-content">

            <ion-content>
                <div class="close-button">
                    <ion-menu-toggle menu="end">
                        <ion-icon name="close" color="light"></ion-icon>
                    </ion-menu-toggle>
                </div>
                <div class="content">
                    <div class="left">
                        <div class="icon-div">
                            <img src="assets/map/Google-Car.png" />
                        </div>
                    </div>
                    <div class="right">
                        <div class="menu-item" *ngFor="let item of sidemenuLayout1" [ngClass]="{'active':item.active}">
                            {{item.title}}
                        </div>
                    </div>
                </div>
            </ion-content>
        </ion-menu>
        <!-- Small Grid 2 -->
        <ion-menu class="sidemenu-4" *ngIf="sidemenu==4" side="end" type="overlay" contentId="main-content">
            <ion-content>
                <div class="content">
                    <div class="menu">
                        <div class="menu-item" *ngFor="let item of sidemenuLayout1">
                            <div class="block" [ngClass]="{'active':item.active}">
                                <div class="icon">
                                    <ion-icon slot="start" [name]="item.icon" [ngClass]="{'active':item.active}">
                                    </ion-icon>
                                </div>
                                <div class="text" [ngClass]="{'active':item.active}">
                                    {{item.title}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ion-content>
        </ion-menu>
        <!-- Overlay -->
        <ion-menu class="sidemenu-5" *ngIf="sidemenu==1" side="end" type="overlay" contentId="main-content">
            <ion-content>
                <div class="content">
                </div>
                <div class="content-on-top">
                    <ion-card slot="fixed" class="driverCard fixed ion-no-margin ion-no-padding" color="primary">
                        <ion-item lines="none" class="ion-padding-vertical">
                            <div class="driverProfileImage">
                                <ion-avatar slot="start" class="profile">
                                    <img src="assets/map/driver.jpeg">
                                </ion-avatar>
                                <div>
                                    <h3 class="userName ion-no-margin">John Doe</h3>
                                </div>
                            </div>
                        </ion-item>

                        <ion-card-content class="ion-no-margin ion-no-padding">
                            <div class="cardContent">
                                <div class="driverDetails">
                                    <ion-label class="textColor textBold detailsLabel">15</ion-label>
                                    <p class="detailText ion-text-uppercase ">Posts</p>
                                </div>
                                <div class="driverDetails">
                                    <ion-label class="textColor textBold detailsLabel ion-text-uppercase">3000
                                    </ion-label>
                                    <p class="detailText ion-text-uppercase">Followers</p>
                                </div>
                                <div class="driverDetails">
                                    <ion-label class="textColor textBold detailsLabel">200</ion-label>
                                    <p class="detailText ion-text-uppercase">Following</p>
                                </div>
                            </div>

                        </ion-card-content>
                    </ion-card>
                    <ion-list lines="none" class="ion-padding-top">
                        <ion-menu-toggle auto-hide="false" *ngFor="let item of sidemenuLayout1" menu="end">
                            <ion-item>
                                <ion-icon slot="start" [name]="item.icon" [ngClass]="{'active':item.active}"></ion-icon>
                                <ion-label [ngClass]="{'active':item.active}">
                                    {{item.title}}
                                </ion-label>
                            </ion-item>
                        </ion-menu-toggle>
                    </ion-list>
                </div>

            </ion-content>
        </ion-menu>
        <!-- Circular -->
        <ion-menu class="sidemenu-6" *ngIf="sidemenu==6" side="end" type="overlay" contentId="main-content">
            <ion-content>
                <div class="content">
                    <div class="inner-circle">
                        <ion-menu-toggle menu="end">
                            <ion-icon name="close"></ion-icon>
                        </ion-menu-toggle>
                    </div>
                    <div class="outer-circle">
                        <div class="menu-item menu-item-{{i}}" *ngFor="let item of sidemenuLayout1;let i =index;">
                            <div class="icon" [ngClass]="{'active':item.active}">
                                <ion-icon [name]="item.icon" [ngClass]="{'active':item.active}"></ion-icon>
                            </div>
                            <div class="title" [ngClass]="{'active':item.active}">{{item.title}}</div>
                        </div>
                    </div>
                </div>
            </ion-content>
        </ion-menu>

        <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
</ion-app>
*/