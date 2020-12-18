import { Component, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { UtilService } from '@app/services/util/util.service';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';

@Component({
  selector: 'app-admob',
  templateUrl: './admob.page.html',
  styleUrls: ['./admob.page.scss'],
})
export class AdmobPage implements OnInit {

  constructor(
    public alertController: AlertController,
    private util: UtilService,
    private admob: AdMobPro,
    private platform: Platform,
  ) { }

  ngOnInit() {
  }

  async presentAlert(data: { adType: string; adNetwork: string; }) {
    const alert = await this.alertController.create({
      header: 'Ad dismissed',
      subHeader: data.adType,
      message: 'You dismissed the ' + data.adType + ' ad from ' + data.adNetwork,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ionViewDidEnter() {
    this.admob.onAdDismiss()
      .subscribe((data: any) => {
        console.log('User dismissed ad', data);
        this.presentAlert(data);
      });
  }

  banner() {
    let adId: string;
    if (this.platform.is('android')) {
      adId = this.util.adMobId.android.banner;
    } else if (this.platform.is('ios')) {
      adId = this.util.adMobId.ios.banner;
    }
    this.admob.createBanner({
      adId,
      isTesting: true, // remove in production
    })
      .then(() => {
        this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  hideBanner() {
    this.admob.hideBanner();
  }

  interstitial() {
    let adId: string;
    if (this.platform.is('android')) {
      adId = this.util.adMobId.android.interstitial;
    } else if (this.platform.is('ios')) {
      adId = this.util.adMobId.ios.interstitial;
    }
    this.admob.prepareInterstitial({
      adId,
      autoShow: true,
      isTesting: true, // remove in production
    })
      .then(() => {
        this.admob.showInterstitial();
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  reward() {
    let adId: string;
    if (this.platform.is('android')) {
      adId = this.util.adMobId.android.reward;
    } else if (this.platform.is('ios')) {
      adId = this.util.adMobId.ios.reward;
    }
    this.admob.prepareRewardVideoAd({
      adId,
      autoShow: true,
      isTesting: true, // remove in production
    })
      .then(() => {
        this.admob.showRewardVideoAd();
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  interstitialVideo() {
    let adId: string;
    if (this.platform.is('android')) {
      adId = this.util.adMobId.android.interstitialVideo;
    } else if (this.platform.is('ios')) {
      adId = this.util.adMobId.ios.interstitialVideo;
    }
    this.admob.prepareInterstitial({
      adId,
      autoShow: true,
      isTesting: true, // remove in production
    })
      .then(() => {
        this.admob.showInterstitial();
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

}
