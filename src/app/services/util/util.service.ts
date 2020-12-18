import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoadingController, AlertController, NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  public fooSubject = new Subject<any>();
  adMobId = {
    android: {
      banner: 'ca-app-pub-3940256099942544/6300978111', // replace with your adMob ID
      interstitial: 'ca-app-pub-3940256099942544/1033173712', // replace with your adMob ID
      interstitialVideo: 'ca-app-pub-3940256099942544/8691691433', // replace with your adMob ID
      reward: 'ca-app-pub-3940256099942544/5224354917', // replace with your adMob ID
    },
    ios: {
      banner: 'ca-app-pub-3940256099942544/2934735716',  // replace with your adMob ID
      interstitial: 'ca-app-pub-3940256099942544/4411468910', // replace with your adMob ID
      interstitialVideo: 'ca-app-pub-3940256099942544/5135589807', // replace with your adMob ID
      reward: 'ca-app-pub-3940256099942544/1712485313', // replace with your adMob ID
    },
  };
  userid: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(
    public http: HttpClient,
    public loadingController: LoadingController,
    public fireAuth: AngularFireAuth,
    public router: Router,
    public toastController: ToastController,
    public nav: NavController,
    public alertController: AlertController,
  ) {
    this.getUserId();
  }

  getUserId() {
    this.fireAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.userid.next(user.uid);
      }
    });
  }

  navigate(link: string, forward?) {
    if (forward) {
      this.nav.navigateForward('/' + link);
    } else {
      this.router.navigateByUrl('/' + link);
    }
  }

  validateEmail(email) {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  async presentToast(message, showButton, position, duration) {
    const toast = await this.toastController.create({
      message,
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Close clicked');
          },
        },
      ],
      position,
      duration,
    });
    toast.present();
  }

  removeConform(): Promise<any> {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: 'Are you sure you want to remove this item',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (cancel) => {

              resolve('cancel');
            },
          }, {
            text: 'Okay',
            handler: (ok) => {

              resolve('ok');
            },
          },
        ],
      });

      alert.present();
    });
  }

  async openLoader() {
    const loading = await this.loadingController.create({
      message: 'Please Wait ...',
      duration: 2000,
    });
    await loading.present();
  }
  async closeLoading() {
    // eslint-disable-next-line no-return-await
    return await this.loadingController.dismiss();
  }

  getLocalUrl(_imagePath): Promise<{ url: string; nativeUrl: string; }> {
    return new Promise((resolve, reject) => {
      const name = _imagePath.split('/');
      this.makeFileIntoBlob(_imagePath, name[name.length - 1]).then((image) => {
        resolve({ url: window.URL.createObjectURL(image), nativeUrl: _imagePath });
      }).catch((_) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject();

      });
    });
  }
  makeFileIntoBlob(_imagePath, fileName) {
    return new Promise((resolve, reject) => {
      window['resolveLocalFileSystemURL'](_imagePath, (fileEntry) => {
        fileEntry['file']((resFile) => {
          const reader = new FileReader();
          reader.onload = (evt: any) => {
            const imgBlob: any = new Blob([evt.target.result], { type: 'image/jpeg' });
            imgBlob.name = fileName;
            resolve(imgBlob);
          };
          reader.onloadend = (evt: any) => {
            const imgBlob: any = new Blob([evt.target.result], { type: 'image/jpeg' });
            imgBlob.name = fileName;
            resolve(imgBlob);
          };

          reader.onerror = (e) => {

            reject(e);
          };

          reader.readAsArrayBuffer(resFile);
        }, (err) => {

          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ message: 'File does not exists.' });
        });
      }, (err) => {
        console.log('error');
      });
    });
  }

  // Sample API response for content loading
  getApiResponse() {
    const myUrl = 'http://www.mocky.io/v2/5c9215a73200005d006bccee?mocky-delay=5000ms';
    return this.http.get(myUrl);
  }
  // Sample API response for Infinite scrolling
  infiniteData() {
    const myUrl = 'http://www.mocky.io/v2/5c9448a0310000a45b55487c?mocky-delay=5000ms';
    return this.http.get(myUrl);
  }
}
