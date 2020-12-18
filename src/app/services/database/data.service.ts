export abstract class DataService {
  abstract init(): Promise<boolean>;

  abstract getScheduleDays(): Promise<any[]>;

  abstract getSpeakers(): Promise<any[]>;

  abstract getAbout(): Promise<any>;

  abstract getAbstracts(): Promise<any[]>;

  abstract getAbstract(abstractId: string): Promise<any>;

  abstract getAbstractAuthor(abstractId: string, authorId: string): Promise<any>;

  abstract getMapDetails(): Promise<any>;

  abstract getEvents(): Promise<any[]>;

  abstract getEvent(eventId: string): Promise<any>;

  abstract getCommittee(committeeId: string): Promise<any>;

  abstract getCommitteeMember(committeeId: string, memberId: string): Promise<any>;

  abstract getCommittees(): Promise<any[]>;

  abstract getSponsor(sponsorId: string): Promise<any>;

  abstract getSponsors(): Promise<any[]>;
}
