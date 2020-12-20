import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { map, tap } from 'rxjs/operators';
import { concat, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {

  account: any = {
    useruid: '',
    isInitialised: false
  };

  customInstallPrompt: any;

  isAdmin: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
  ) { }

  getEmail(): Observable<string> {
    return this.afAuth.authState.pipe(
      map((user) => {
        return user.email;
      }));
  }

  getUser(): Observable<any> {
    const getUserState$ = this.afAuth.authState.pipe(
      map((user) => {
        const isUserValid = !!user;
        if (isUserValid) {
          this.loadUserData(user);
        }
        else {
          console.log('User not loaded');
        }
        return user;
      }));
    return getUserState$;
  }

  isUserAuthenticated(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map((user) => {
        return !!user;
      }));
  }

  loadUserData(user) {
    this.account = { ...this.account, user: user }
    firebase
      .firestore()
      .doc(`/accounts/${user.uid}`)
      .get()
      .then(userProfileSnapshot => {
        const snapShotData = userProfileSnapshot.data();
        if (!!snapShotData) {
          this.account = { ...this.account, snapShotData: snapShotData }
          this.account = { ...this.account, isInitialised: true }
          const { roles } = this.account.snapShotData;
          this.isAdmin = roles.includes("admin");
        }
        else {
          this.initUserToFireStore(user);
        }
      });

  }

  signInWithEmail(credentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  initUserToFireStore(user: any) {
    const userUid = user.uid; // The UID of the user.
    let account = {
      useruid: userUid,
      preferences: [],
      settings: [],
      zipCodes: '',
      addresses: [],
      userRaw: null,
      roles: ['user']
    };
    firebase.firestore().collection('accounts').doc(userUid).set(account).then(s => {
      console.log('Initialised User!');
    });
  }

  signUp(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}
