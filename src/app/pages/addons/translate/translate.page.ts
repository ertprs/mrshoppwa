/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-translate',
  templateUrl: './translate.page.html',
  styleUrls: ['./translate.page.scss'],
})
export class TranslatePage implements OnInit {
  public segmentTab = 'translation';
  public title: string;
  public title2: string;
  public description: string;
  public name: string;
  public language: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  ionViewDidEnter(): void {
    console.log('challa?');
    this._initTranslate();
  }

  _initialiseTranslation(): void {
    this.translate.get('TITLE').subscribe((res: string) => {
      console.log(res);
      this.title = res;
    });
    this.translate.get('description').subscribe((res: string) => {
      console.log(res);
      this.description = res;
    });
    this.translate.get('TITLE_2', { value: 'John' }).subscribe((res: string) => {
      console.log(res);
      this.title2 = res;
    });
    // eslint-disable-next-line @typescript-eslint/camelcase
    this.translate.get('data.name', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      console.log(res);
      this.name = res;
    });

  }

  public changeLanguage(): void {
    this.translateLanguage();
  }

  translateLanguage(): void {
    console.log('language', this.language);
    this.translate.use(this.language);
    this._initialiseTranslation();
  }

  _initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.language = this.translate.getBrowserLang();
      console.log('browser language is', this.translate.getBrowserLang());
    } else {
      // Set your language here
      this.language = 'en';
    }

    this.translateLanguage();
  }

  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
  }


}
