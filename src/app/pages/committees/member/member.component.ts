import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallService } from 'src/app/services/common/call.service';
import { EmailService } from 'src/app/services/common/email.service';
import { InAppBrowserService } from 'src/app/services/common/in-app-browser.service';
import { CommitteesService } from '../committees.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {

  member: any;

  constructor(
    private committeesService: CommitteesService,
    private callService: CallService,
    private emailService: EmailService,
    private inBrowser: InAppBrowserService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.member = this.committeesService.getCurrentMember();
    if (!this.member) {
      this.init();
    }
  }

  init() {
    this.activatedRoute.url.subscribe((params) => {
      this.committeesService.fetchCommittees('')
        .then((committees) => {
          this.member = committees.find((committiee) => {
            return committiee.$key === params[0].path;
          }).members[params[2].path];
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
