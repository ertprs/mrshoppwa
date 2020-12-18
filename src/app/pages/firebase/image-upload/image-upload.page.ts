/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { StorageService } from '@app/services/firestore/filestorage.service';
import { FirestoreService } from '@app/services/firestore/firestore.service';
import { UtilService } from '@app/services/util/util.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, AlertController, MenuController } from '@ionic/angular';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.page.html',
  styleUrls: ['./image-upload.page.scss'],
})
export class ImageUploadPage implements OnInit {
  public imageList: any;
  public isUpdate: any;

  constructor(
    private firestoreServ: FirestoreService,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    public util: UtilService,
    private actionCtrl: ActionSheetController,
    private camera: Camera,
    private storageServ: StorageService
  ) { }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }

  ngOnInit() {
    this.util.userid.subscribe(data => {
      console.log('data', data);
      this.firestoreServ.getImages().subscribe(imgList => {
        this.imageList = imgList;
        console.log('imgList', imgList);
      });
    });
  }
  async openAlert(index: number) {
    const alert = await this.alertCtrl.create({
      header: 'Sure want to delete this!!!',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          cssClass: 'secondary',
          handler: () => {
            this.deleteData(index);
          }
        }, {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel');

          }
        }
      ]
    });

    await alert.present();
  }
  async openActionsheet() {
    const action = await this.actionCtrl.create({
      buttons: [
        {
          text: 'Take a picture',
          role: 'destructive',
          cssClass: 'buttonCss',
          handler: () => {
            this.openCamera();
          }
        }, {
          text: 'Pick From Gallery',
          handler: () => {
            this.openGallery();
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'buttonCss_Cancel',
          handler: () => {
            console.log('cancel');
          }
        }
      ]
    });
    await action.present();
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((url) => {
      const name = UUID.UUID();
      // let name = url.split('/');
      this.util.makeFileIntoBlob(url, name).then(imageData => {
        this.util.openLoader();
        this.storageServ.uploadContent(imageData, name).then(success => {
          this.util.closeLoading();
          this.util.presentToast('image uploded', true, 'bottom', 2100);

        }).catch(err => {
          this.util.closeLoading();
          this.util.presentToast(`${err}`, true, 'bottom', 2100);
        });
      });
    }).catch(err => { console.log(err); });
  }

  public deleteData(id) {
    this.firestoreServ.delete('fileReferences', id).then(() => {
      this.util.presentToast('Image Deleted', true, 'bottom', 2100);
    }).catch();
  }

  public openGallery() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
    this.camera.getPicture(options).then((url) => {
      const name = UUID.UUID();
      this.util.makeFileIntoBlob(url, name).then(imageData => {

        this.util.openLoader();
        this.storageServ.uploadContent(imageData, name).then(response => {
          this.util.closeLoading();
          this.util.presentToast('image uploded', true, 'bottom', 2100);
        }).catch(err => {
          this.util.closeLoading();
          this.util.presentToast(`${err}`, true, 'bottom', 2100);
        });
      });
    }).catch(err => { console.log(err); });
  }

}
