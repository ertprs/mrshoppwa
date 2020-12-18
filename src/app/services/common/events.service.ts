import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private _onUserLogin = new Subject<boolean>();
  public onUserLogin = this._onUserLogin.asObservable();

  private _onUserSignUp = new Subject<boolean>();
  public onUserSignUp = this._onUserSignUp.asObservable();

  private _onUserLogOut = new Subject<boolean>();
  public onUserLogOut = this._onUserLogOut.asObservable();

  public userLogIn(isMenuEnabled: boolean): void {
    this._onUserLogin.next(isMenuEnabled);
  }

  public userSignUp(isMenuEnabled: boolean): void {
    this._onUserSignUp.next(isMenuEnabled);
  }

  public userLoggedOut(isMenuEnabled: boolean): void {
    this._onUserLogOut.next(isMenuEnabled);
  }
}
