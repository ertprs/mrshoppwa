import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MenuController, NavController, ViewWillEnter } from '@ionic/angular';
import { UserOptions } from '@app/interfaces/user-options';
import { UserDataService } from '@app/services/common/user-data.service';
import { EventsService } from '@app/services/common/events.service';
import { appTitle } from 'config/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements ViewWillEnter{

  login: UserOptions = { email: 'user@monthlyrepeat.com', password: 'letmein@monthlyrepeat' };
  submitted = false;
  loginError: string;

  constructor(
    private userData: UserDataService,
    private navCtrl: NavController,
    private router: Router,
    private titleService: Title,
    private eventsService: EventsService,
    private menuCtrl: MenuController,
  ) { }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Login');
    this.menuCtrl.enable(false);
  }

  onLogin(form: NgForm) {
    this.loginError = '';
    this.submitted = true;

    if (form.valid) {
      this.userData.signInWithEmail(this.login).then(
        (result) => {
          this.navCtrl.navigateRoot('/tabs/home');
          this.eventsService.userLogIn(true);
        },
        (error) => this.loginError = error.message,
      );
    }
  }

  onSignup() {
    this.router.navigate(['sign-up']);
  }
}
