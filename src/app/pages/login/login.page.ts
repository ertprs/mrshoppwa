import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AlertController, MenuController, NavController, ViewWillEnter } from '@ionic/angular';
import { UserOptions } from '@app/interfaces/user-options';
import { UserDataService } from '@app/services/common/user-data.service';
import { EventsService } from '@app/services/common/events.service';
import { appTitle } from 'config/config';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, ViewWillEnter {

  login: UserOptions = { email: 'user@monthlyrepeat.com', password: 'letmein@monthlyrepeat' };
  submitted = false;
  loginError: string;

  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  phoneNumber: any = '';

  constructor(
    private userData: UserDataService,
    private navCtrl: NavController,
    private router: Router,
    private titleService: Title,
    private eventsService: EventsService,
    private menuCtrl: MenuController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    console.log('Signin By Phone number required');
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Login');
    this.menuCtrl.enable(false);
  }

  signIn(phoneNumber: number) {
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+" + phoneNumber;
    var that = this;
    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then(async (confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        let prompt = await this.alertCtrl.create({
          // title: 'Enter the Confirmation code',
          inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
          buttons: [
            {
              text: 'Cancel',
              handler: data => { console.log('Cancel clicked'); }
            },
            {
              text: 'Send',
              handler: data => {
                confirmationResult.confirm(data.confirmationCode)
                  .then(function (result) {
                    // User signed in successfully.
                    console.log(result.user);
                    that.navCtrl.navigateRoot('/tabs/home');
                    that.eventsService.userLogIn(true);
                    // ...
                  }).catch(function (error) {
                    // User couldn't sign in (bad verification code?)
                    // ...
                  });
              }
            }
          ]
        });
        await prompt.present();
      })
      .catch(function (error) {
        console.error("SMS not sent", error);
      });

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
