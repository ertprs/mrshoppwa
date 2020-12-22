/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '@app/services/wordpress/wordpress.service';
import { UtilService } from '@app/services/util/util.service';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.page.html',
  styleUrls: ['./blogpage.page.scss'],
})
export class BlogpagePage implements OnInit {
  public blogDetail: any;
  public imageUrl: string;

  constructor(
    public activatedRoute: ActivatedRoute,
    public wpService: WordpressService,
    public util: UtilService,
  ) {
    this.imageUrl = null;
  }

  ngOnInit() {
    this.util.openLoader();
    // Get the ID that was passed with the URL
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.wpService.getBlogDetail(id).subscribe((result) => {
      this.blogDetail = result;
      this.getImage(this.blogDetail);
      this.getTags();
      this.getAuthor();
    });

  }

  getImage(data) {
    this.wpService.getImage(data.featured_media).subscribe((blogDetails) => {
      console.log('blogDetails', blogDetails);
      this.blogDetail.imageData = blogDetails;
      this.imageUrl = this.blogDetail.imageData.source_url;
    });
  }

  getTags() {
    this.wpService.getTags().subscribe((data: Array<any>) => {
      this.blogDetail.tagsData = data.filter((item) => {
        return this.blogDetail.tags.includes(item.id);
      });
      console.log(this.blogDetail);
    });
  }

  getAuthor() {
    this.wpService.getUser(this.blogDetail.author).subscribe((data) => {
      console.log(data);
      this.blogDetail.authorData = data;
      this.util.closeLoading();
    });
  }

}
