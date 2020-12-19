import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallService } from '@app/services/common/call.service';
import { EmailService } from '@app/services/common/email.service';
import { InAppBrowserService } from '@app/services/common/in-app-browser.service';
import { AbstractsService } from '../abstracts.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss'],
})
export class AuthorDetailComponent implements OnInit {

  author: any;

  constructor(
    private abstractsService: AbstractsService,
    private callService: CallService,
    private emailService: EmailService,
    private inBrowser: InAppBrowserService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.author = this.abstractsService.getCurrentAuthor();
    if (!this.author) {
      this.init();
    }
  }

  init() {
    this.activatedRoute.url.subscribe((params) => {
      this.abstractsService.getAuthor(params[0].path, params[2].path).then((author) => {
        this.author = author;
      });
    });
  }

  call(phone: string) {
    this.callService.call(phone);
  }

  sendEmail(email: string) {
    this.emailService.sendEmail(email);
  }

  openLinkedin(linkedIn: string) {
    this.inBrowser.open(linkedIn);
  }

  openUrl(url: string) {
    this.inBrowser.open(url);
  }
}
