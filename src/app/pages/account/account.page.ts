import { Component, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { UserDataService } from 'src/app/services/common/user-data.service';
import { EventsService } from 'src/app/services/common/events.service';
import { appTitle } from 'src/config';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements AfterViewInit {

  email: string;

  constructor(
    private navCtrl: NavController,
    private userDataService: UserDataService,
    private titleService: Title,
    private eventsService: EventsService,
  ) { }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Account');
  }

  ngAfterViewInit() {
    this.getEmail();
  }

  getEmail() {
    this.userDataService.getEmail().pipe(
      first(),
    ).subscribe((email) => {
      this.email = email;
    });
  }

  logout() {
    this.userDataService.signOut();
    this.navCtrl.navigateRoot('login');
    this.eventsService.userLoggedOut(false);
  }
}
