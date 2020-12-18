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
import { WordpressService } from '@app/services/wordpress/wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {
  public blogPosts: Observable<any>;

  constructor(
    private wpService: WordpressService,
    public util: UtilService
  ) { }

  ngOnInit() {
    this.util.openLoader();
    // Initiate the API call to fetch all blogs. Show spinner in meantime
    this.getBlogData();
  }

  getBlogData() {
    // Call our service function which returns an Observable
    this.wpService.getBlogs().subscribe(result => {
      this.blogPosts = result;
      this.getImages();
    });
  }

  getImages() {
    this.wpService.getMedia().subscribe((data: Array<any>) => {
      this.blogPosts.forEach(element => {
        console.log('element', element);
        const media = data.filter(item => {
          return item.id === element.featured_media;
        });


        element.imageData = media[0];


      });
      console.log('aashjasjhkjs', this.blogPosts);
      this.util.closeLoading();
    });
  }

}
