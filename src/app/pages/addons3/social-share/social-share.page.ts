
/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';
import { UtilService } from '@app/services/util/util.service';
import { environment } from '@env/environment';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.page.html',
  styleUrls: ['./social-share.page.scss'],
})
export class SocialSharePage implements OnInit {
  public showToolbar: boolean;
  public shownGroup = null;
  public socialShare: Array<any>;

  constructor(
    private socialSharing: SocialSharing,
    private util: UtilService
  ) {
    this.socialShare = environment.SOCIAL_SHARE;
  }

  ngOnInit() {
    this.toggleGroup(0);
  }
  ionViewWillEnter() {
    this.showToolbar = true;
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = true;
    } else {
      this.shownGroup = group;
    }
  }

  isGroupShown(group) {
    return this.shownGroup === group;
  }


  async share(shareData) {
    if (!shareData.text) {
      shareData.text = null;
    }
    if (!shareData.image) {
      shareData.image = null;
    }
    if (!shareData.url) {
      shareData.url = null;
    }
    this.socialSharing[`${shareData.shareType}`](shareData.text, shareData.image, shareData.url)
      .then((res) => console.log('res', res))
      .catch((e) => console.log('error', e));
  }


  async canShareViaEmail(shareData: any) {
    this.socialSharing.canShareViaEmail().then((res) => {
      // Success
      this.util.presentToast('Email sharing possible', true, 'bottom', 1500);
    }).catch((e) => {
      // Error!
      this.util.presentToast('Email sharing not possible', true, 'bottom', 1500);
    });
  }

  async shareViaEmail(shareData: any) {
    this.socialSharing.shareViaEmail(shareData.share.body, shareData.share.subject, shareData.share.to, null, null, shareData.share.image).then((res) => {
      // Success
      console.log('res', res);
    }).catch((e) => {
      // Error!
      console.log(e);
    });
  }
}
