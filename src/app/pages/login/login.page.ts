import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { UserOptions } from '@app/interfaces/user-options';
import { UserDataService } from '@app/services/common/user-data.service';
import { EventsService } from '@app/services/common/events.service';
import { appTitle } from 'config/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  login: UserOptions = { email: '', password: '' };
  submitted = false;
  loginError: string;

  constructor(
    private userData: UserDataService,
    private navCtrl: NavController,
    private router: Router,
    private titleService: Title,
    private eventsService: EventsService,
  ) { }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Login');
  }

  onLogin(form: NgForm) {
    this.loginError = '';
    this.submitted = true;

    if (form.valid) {
      this.userData.signInWithEmail(this.login).then(
        () => {
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
