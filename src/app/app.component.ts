import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessagingService } from 'src/services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notifclient';
  message: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private _msgService: MessagingService) {
    this._msgService.requestPermission();
    this._msgService.receiveMessage();
    this.message = _msgService.currentMessage;
  }
}
