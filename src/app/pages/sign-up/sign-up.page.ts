import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/common/user-data.service';
import { UserOptions } from 'src/app/interfaces/user-options';
import { EventsService } from 'src/app/services/common/events.service';
import { appTitle } from 'src/config';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {

  signup: UserOptions = { email: '', password: '' };
  submitted = false;
  signupError: string;

  constructor(
    private navCtrl: NavController,
    private userData: UserDataService,
    private titleService: Title,
    private eventsService: EventsService,
  ) { }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Signup');
  }

  onSignup(form: NgForm) {
    this.submitted = true;
    this.signupError = '';

    if (form.valid) {
      this.userData.signUp(this.signup)
        .then(
          () => {
            this.navCtrl.navigateRoot('/tabs/schedule');
            this.eventsService.userSignUp(true);
          },
          (error) => this.signupError = error.message,
        );
    }
  }
}
