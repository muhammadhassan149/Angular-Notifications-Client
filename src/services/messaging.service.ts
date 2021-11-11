import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  currentMessage: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private _afm: AngularFireMessaging) {

  }

  requestPermission() {
    this._afm.requestToken.subscribe(
      (token) => { console.log('Permission Granted! Your token is ' + token); },
      (error) => { console.log(error); }
    )
  }

  receiveMessage() {
    this._afm.messages
      .subscribe((message) => { this.currentMessage.next(message) });
  }
}
