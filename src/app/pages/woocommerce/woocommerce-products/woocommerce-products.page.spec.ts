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

import { WoocommerceProductsPage } from './woocommerce-products.page';

describe('WoocommerceProductsPage', () => {
  let component: WoocommerceProductsPage;
  let fixture: ComponentFixture<WoocommerceProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoocommerceProductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WoocommerceProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
