import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SponsorsService } from '../sponsors.service';
import { CallService } from 'src/app/services/common/call.service';
import { EmailService } from 'src/app/services/common/email.service';
import { InAppBrowserService } from 'src/app/services/common/in-app-browser.service';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss'],
})
export class SponsorComponent implements OnInit {

  sponsor: any;

  constructor(
    private sponsorsService: SponsorsService,
    private callService: CallService,
    private emailService: EmailService,
    private inBrowser: InAppBrowserService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sponsor = this.sponsorsService.getCurrent();
    if (!this.sponsor) {
      this.init();
    }
  }

  init() {
    this.activatedRoute.params.subscribe((params) => {
      this.sponsorsService.getSponsor(params.id).then((sponsor) => {
        this.sponsor = sponsor;
      });
    });
  }

  call(phone: string) {
    this.callService.call(phone);
  }

  sendEmail(email: string) {
    this.emailService.sendEmail(email);
  }

  openUrl(url: string) {
    this.inBrowser.open(url);
  }
}
