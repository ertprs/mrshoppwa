import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { DataService } from 'src/app/services/database/data.service';

@Injectable({
  providedIn: 'root',
})
export class CommitteesService {

  committees = null;

  private currentCommittee: any;
  private currentMember: any;

  constructor(
    private dataService: DataService,
  ) {
  }

  getCommittees() {
    if (!this.committees) {
      return this.dataService.getCommittees();
    }
    return Promise.resolve(this.committees);
  }

  fetchCommittees(filter) {
    filter = filter ? filter.toLowerCase() : filter;
    return this.getCommittees().then((committees) => {
      const filteredCommittees = _.filter(committees, (committee: any) => {
        const arrayOfMembers = [];
        _.each(committee.members, (member) => {
          arrayOfMembers.push((member.firstName + ' ' + member.lastName).toLowerCase());
        });
        return !filter
          || committee.title.toLowerCase().indexOf(filter) >= 0
          || arrayOfMembers.join('').indexOf(filter) >= 0;
      });

      return Promise.resolve(filteredCommittees);
    });
  }

  getCommittee(committeeId): Promise<any> {
    return this.dataService.getCommittee(committeeId);
  }

  getCommitteeMember(committeeId, memberId): Promise<any> {
    return this.dataService.getCommitteeMember(committeeId, memberId);
  }

  setCurrent(committee: any) {
    this.currentCommittee = committee;
  }

  getCurrent() {
    return this.currentCommittee;
  }

  setCurrentMember(member: any) {
    this.currentMember = member;
  }

  getCurrentMember() {
    return this.currentMember;
  }
}
