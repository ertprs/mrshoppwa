import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CommitteesService } from '../committees.service';
import { appTitle } from 'src/config';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.scss'],
})
export class CommitteesComponent implements OnInit {

  queryText = '';
  committees: any[] = [];

  constructor(
    private committeesService: CommitteesService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.updateList();
  }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Committees');
  }

  updateList() {
    this.committeesService.fetchCommittees(this.queryText)
      .then((committees) => {
        this.committees = committees;
      });
  }

  goToEventDetail(committee: any) {
    this.committeesService.setCurrent(committee);
    this.router.navigate([`${committee.$key}`], {relativeTo: this.route});
  }
}
