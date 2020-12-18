import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {

  constructor(
    private afAuth: AngularFireAuth,
  ) { }

  getEmail(): Observable<string> {
    return this.afAuth.authState.pipe(
      map((user) => {
        return user.email;
      }));
  }

  isUserAuthenticated(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map((user) => {
        return !!user;
      }));
  }

  signInWithEmail(credentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  signUp(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}
