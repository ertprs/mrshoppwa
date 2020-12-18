import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SponsorsService } from '../sponsors.service';
import { appTitle } from 'src/config';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
})
export class SponsorsComponent implements OnInit {

  sponsors: any[] = [];
  queryText = '';

  constructor(
    private sponsorsService: SponsorsService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.updateSponsors();
  }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Sponsors');
  }

  goToSponsorDetail(sponsor: any) {
    this.sponsorsService.setCurrent(sponsor);
    this.router.navigate([`${sponsor.$key}`], {relativeTo: this.route});
  }

  updateSponsors() {
    this.sponsorsService.fetchSponsors(this.queryText).then((sponsors: any[]) => {
      this.sponsors = sponsors;
    });
  }
}
