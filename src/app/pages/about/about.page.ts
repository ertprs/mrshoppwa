import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/services/database/data.service';
import { EmailService } from 'src/app/services/common/email.service';
import { MapsService } from 'src/app/services/common/maps.service';
import { appTitle } from 'src/config';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  about: any;

  constructor(
    private dataService: DataService,
    private emailService: EmailService,
    private mapService: MapsService,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.dataService.getAbout().then((about) => {
      this.about = about;
    });
  }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - About');
  }

  sendEmail(email: string) {
    this.emailService.sendEmail(email);
  }

  findUs() {
    const location = this.about.venue.mapData;
    const title = this.about.venue.title;
    this.mapService.openMapsApp(`${location.latitude},${location.longitude}`, `${title}`);
  }
}
