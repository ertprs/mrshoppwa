import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakersService } from '../speakers.service';
import { EmailService } from 'src/app/services/common/email.service';
import { InAppBrowserService } from 'src/app/services/common/in-app-browser.service';
import { CallService } from 'src/app/services/common/call.service';

@Component({
  selector: 'app-speaker-detail',
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.scss'],
})
export class SpeakerDetailComponent implements OnInit {

  speaker: any;

  constructor(
    private speakersService: SpeakersService,
    private callService: CallService,
    private emailService: EmailService,
    private inBrowser: InAppBrowserService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.speaker = this.speakersService.getCurrent();
    if (!this.speaker) {
      this.init();
    }
  }

  init() {
    this.activatedRoute.params.subscribe((params) => {
      this.speakersService.getSpeakerById(params.id).then((speaker) => {
        this.speaker = speaker;
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
