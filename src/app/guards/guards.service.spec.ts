/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { TestBed } from '@angular/core/testing';

import { GuardsService } from './guards.service';

describe('GuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardsService = TestBed.get(GuardsService);
    expect(service).toBeTruthy();
  });
});
