import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/services/database/data.service';
import { SpeakersService } from '../speakers.service';
import { appTitle } from 'src/config';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss'],
})
export class SpeakersListComponent implements OnInit {

  queryText = '';
  speakers: any[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private speakersService: SpeakersService,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.updateSpeakers();
  }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Speakers');
  }

  goToSpeakerDetail(speaker: any) {
    this.speakersService.setCurrent(speaker);
    this.router.navigate([`${speaker.$key}`], {relativeTo: this.route});
  }

  updateSpeakers() {
    this.dataService.getSpeakers().then((speakers: any[]) => {
      this.speakers = Object.keys(speakers)
        .map((key) => speakers[key])
        .sort((a, b) => {
          if (a.fullname.toLowerCase() < b.fullname.toLowerCase()) {
            return -1;
          }
        });

      if (this.queryText) {
        this.speakers = this.speakers.filter((speaker) => {
          return speaker.fullname.toLowerCase().indexOf(this.queryText.toLowerCase()) !== -1;
        });
      }
    });
  }
}
