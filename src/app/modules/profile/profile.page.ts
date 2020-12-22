/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '@app/services/common/user-data.service';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, ViewWillEnter {
  public selectSegment: string;
  public userDetails: any;

  constructor(private userDataService: UserDataService) {
    this.selectSegment = 'profile';
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.buildUserDetails();
  }

  buildUserDetails() {
    const isInitialised = this.userDataService.account.isInitialised;
    if (isInitialised) {
      console.log('Set Profile Data here: TODO');
      console.log(this.userDataService.account);
      let profileUrl = '';
      let name = '';
      let location = '';
      const { user } = this.userDataService.account;
      this.userDetails = {
        profileUrl: 'assets/profile/user.jpeg',
        name: 'John Doe',
        phoneNo: '+00-000-0000-0000',
        location: 'Uthopia'
      };
    }
    else {
      this.userDetails = {
        profileUrl: 'assets/profile/user.jpeg',
        name: 'John Doe',
        phoneNo: '+00-000-0000-0000',
        location: 'Uthopia'
      };
    }
  }

  editProfile() {
    this.selectSegment = 'profile';
  }
}
