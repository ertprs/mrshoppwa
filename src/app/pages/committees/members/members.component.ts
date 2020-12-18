import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommitteesService } from '../committees.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {

  committee: any;

  get members() {
    if (!this.committee.members) {
      return [];
    }
    return Object.keys(this.committee.members).map((id) => {
      return {...this.committee.members[id], $key: id};
    });
  }

  constructor(
    private committeesService: CommitteesService,
    private router: Router,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.committee = this.committeesService.getCurrent();
    if (!this.committee) {
      this.init();
    }
  }

  init() {
    this.activatedRoute.params.subscribe((params) => {
      this.committeesService.fetchCommittees('')
        .then((committees) => {
          this.committee = committees.find((committiee) => {
            return committiee.$key === params.id;
          });
        });
    });
  }

  goToMemberDetail(member: any) {
    this.committeesService.setCurrentMember(member);
    this.router.navigate(['member', `${member.$key}`], {relativeTo: this.route});
  }
}
