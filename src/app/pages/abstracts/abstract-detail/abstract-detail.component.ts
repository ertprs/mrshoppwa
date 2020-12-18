import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InAppBrowserService } from 'src/app/services/common/in-app-browser.service';
import { AbstractsService } from '../abstracts.service';

@Component({
  selector: 'app-abstract-detail',
  templateUrl: './abstract-detail.component.html',
  styleUrls: ['./abstract-detail.component.scss'],
})
export class AbstractDetailComponent implements OnInit {

  abstract: any;

  get authors() {
    if (!this.abstract.authors) {
      return [];
    }
    return Object.keys(this.abstract.authors).map((id) => {
      return {...this.abstract.authors[id], $key: id};
    });
  }

  get presenters() {
    if (!this.abstract.presenters) {
      return [];
    }
    return Object.keys(this.abstract.presenters).map((id) => this.abstract.presenters[id]);
  }

  get corresponding() {
    if (!this.abstract.corresponding) {
      return [];
    }
    return Object.keys(this.abstract.corresponding).map((id) => this.abstract.corresponding[id]);
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private inAppBrowser: InAppBrowserService,
    private abstractsService: AbstractsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.abstract = this.abstractsService.getCurrent();
    if (!this.abstract) {
      this.init();
    }
  }

  init() {
    this.activatedRoute.params.subscribe((params) => {
      this.abstractsService.getAbstract(params.id).then((abstract) => {
        this.abstract = abstract;
      });
    });
  }

  downloadPdf() {
    this.inAppBrowser.open(this.abstract.pdf);
  }

  goToAuthorDetails(author: any) {
    this.abstractsService.setCurrentAuthor(author);
    this.router.navigate(['author', `${author.$key}`], {relativeTo: this.route});
  }

  isInFavorites(key: string) {
    return this.abstractsService.isInFavorites(key);
  }

  toggleFavorites(key: string) {
    this.abstractsService.toggleFavorites(key);
  }
}
