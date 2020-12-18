/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContentLoader2Page } from './content-loader2.page';

describe('ContentLoader2Page', () => {
  let component: ContentLoader2Page;
  let fixture: ComponentFixture<ContentLoader2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentLoader2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentLoader2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
