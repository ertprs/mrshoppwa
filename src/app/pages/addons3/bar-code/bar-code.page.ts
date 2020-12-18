/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Platform } from '@ionic/angular';
import { Base64 } from '@ionic-native/base64/ngx';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-bar-code',
  templateUrl: './bar-code.page.html',
  styleUrls: ['./bar-code.page.scss'],
})
export class BarCodePage implements OnInit {
  public encodedData: any;
  public qrImage: any;
  public scannedData: {};
  public barcodeScannerOptions: BarcodeScannerOptions;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private platform : Platform,
    private webview : WebView,
    public base64: Base64,
    public domSanitizer: DomSanitizer,
    ) {
    // these options can be used with scan() function
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

  }

  ngOnInit() {
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      alert('Barcode data ' + JSON.stringify(barcodeData));
      this.scannedData = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }

  encodedText() {
    console.log(this.encodedData);
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodedData).then((encodedData) => {
      if (this.platform.is('ios')) {
        const qrImage = this.webview.convertFileSrc(encodedData.file);
        this.base64.encodeFile(qrImage).then((base64File: string) => {
          const imageSrc = base64File.split(',');
          this.qrImage =
            this.domSanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' +
              imageSrc[1]);
        });
      }
      
    }, (err: string) => {
      console.log('Error occured : ' + err);
    });

  }

}
