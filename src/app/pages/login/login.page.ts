import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AlertController, MenuController, NavController, Platform, ViewWillEnter } from '@ionic/angular';
import { UserOptions } from '@app/interfaces/user-options';
import { UserDataService } from '@app/services/common/user-data.service';
import { EventsService } from '@app/services/common/events.service';
import { appTitle } from 'config/config';
import * as firebase from 'firebase/app';
import { AuthenticationService } from '@app/services/firestore/firebase-authentication.service';
import { UtilService } from '@app/services/util/util.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

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
    private alertController: AlertController,
    private authServ: AuthenticationService,
    public util: UtilService,
    private platform: Platform,
    private splashScreen: SplashScreen

  ) { }

  ngOnInit() {
    console.log('Signin By Phone number required');
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Login');
    this.menuCtrl.enable(false);
    this.menuCtrl.enable(false, 'start');
    this.menuCtrl.enable(false, 'end');
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  signIn(phoneNumber: number) {
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+" + phoneNumber;
    var that = this;
    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then(async (confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        let prompt = await this.alertController.create({
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

  successFullLoginFn() {
    this.navCtrl.navigateRoot('/tabs/home');
    this.eventsService.userLogIn(true);
  }

  signin() {
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

  async forgotPassword() {
    const alert = await this.alertController.create({
      header: 'Reset Email',
      backdropDismiss: false,
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Enter your email',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (userResult) => {
            console.log('Cancel');
          }
        }, {
          text: 'Ok',
          handler: (userResult) => {
            console.log('userResult.email', userResult.email);
            const value = this.util.validateEmail(userResult.email);
            this.authServ.forgotPassoword(userResult.email);
            return value;
          }
        }
      ]
    });
    await alert.present();
  }

  facebookLogin($event) {
    if ($event === 'browser') {
      this.authServ.fbLogin().then(success => {
        console.log('success in fb login browser', success);
        this.util.presentToast('success in fb login browser', true, 'bottom', 2100);
        this.authServ.createSocialLoginUser(success.user);
        this.successFullLoginFn()
      }).catch(err => {
        console.log(err.message, 'error in fb login browser');
        this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
      });
    } else {
      this.authServ.loginWithFacebook($event).then(success => {
        console.log('success in fb login', success);
        this.util.presentToast('success in fb login', true, 'bottom', 2100);
        this.authServ.createSocialLoginUser(success.user);
        this.successFullLoginFn()
      }).catch(err => {
        console.log(err.message, 'error in fb login');
        this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
      });
    }
  }

  twitterLogin($event: any) {
    if ($event.isBrowser) {
      this.authServ.twitterLogin().then(success => {
        console.log('success in twitter login', success);
        this.util.presentToast('success in twitter login', true, 'bottom', 2100);
        this.authServ.createSocialLoginUser(success.user);
        this.successFullLoginFn()
      }).catch(err => {
        console.log(err.message, 'error in twitter login');
        this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
      });
    } else {
      this.authServ.loginWithTwitter($event.token, $event.secret).then(success => {
        console.log('success in twitter login', success);
        this.authServ.createSocialLoginUser(success.user);
        this.successFullLoginFn()
      }).catch(err => {
        console.log(err.message, 'error in twitter login');
        this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
      });
    }
  }

  googleLogin($event: any) {
    if ($event.isBrowser) {
      this.authServ.googleLogin().then(success => {
        console.log('success in google login', success);
        this.authServ.createSocialLoginUser(success.user);
        this.successFullLoginFn()
      }).catch(err => {
        console.log(err.message, 'error in google login');
        this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
      });
    } else {
      this.authServ.loginWithGoogle($event.idToken, $event.accessToken).then(success => {
        console.log('success in google login', success);
        this.authServ.createSocialLoginUser(success.user);
        this.successFullLoginFn()
      }).catch(err => {
        console.log(err.message, 'error in google login');
        this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
      });
    }
  }
}
