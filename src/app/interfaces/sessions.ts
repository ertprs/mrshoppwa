export interface SubSessionData {
  $key: string;
  description: string;
  location: string;
  speakers: string[];
  timeEnd: string;
  timeStart: string;
  title: string;
}

export interface SubSession {
  date: string;
  subsession: SubSessionData;
}

export interface Session {
  time: string;
  subSessions: SubSession[];
}

export interface Day {
  date: string;
  sessions: Session[];
}
