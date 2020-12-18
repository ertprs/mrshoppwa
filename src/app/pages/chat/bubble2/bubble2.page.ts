/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@env/environment';

@Component({
  selector: 'app-bubble2',
  templateUrl: './bubble2.page.html',
  styleUrls: ['./bubble2.page.scss'],
})
export class Bubble2Page implements OnInit {
  @ViewChild('IonContent', { static: true }) content: IonContent;
  public paramData: any;
  public msgList: any;
  public userName: any;
  public userInput: string;
  public User: string;
  public toUser: string;
  public startTyping: any;
  public loader: boolean;

  constructor(public activRoute: ActivatedRoute) {
    this.activRoute.params.subscribe((params) => {
      console.log(params);
      this.paramData = params;
      this.userName = params.name;
    });
    this.msgList = environment.BUBBLE2_MESSAGELIST;
  }

  ngOnInit() {
    this.userInput = '';
    this.User = 'Me';
    this.toUser = 'HealthBot';
  }
  sendMsg() {
    const msgLength: number = this.msgList.length;
    if (this.userInput !== '') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: 'assets/chat/chat/chat3.jpg',
        time: '12:01',
        message: this.userInput,
        id: msgLength + 1,
      });
      this.userInput = '';
      this.scrollDown();
      setTimeout(() => {
        this.senderSends();
      }, 500);

    }
  }
  senderSends() {
    this.loader = true;
    setTimeout(() => {
      this.msgList.push({
        userId: this.User,
        userName: this.User,
        userAvatar: 'assets/chat/chat/chat5.jpg',
        time: '12:01',
        message: 'Sorry, didn\'t get what you said. Can you repeat that please',
      });
      this.loader = false;
      this.scrollDown();
    }, 2000);
    this.scrollDown();
  }
  scrollDown() {
    setTimeout(() => {
      this.scrollToBottom();
    }, 50);
  }

  userTyping(event: any) {
    console.log(event);
    this.startTyping = event.target.value;
    this.scrollDown();
  }
  scrollToBottom() {
    const content = document.getElementById('chat-container');
    const parent = document.getElementById('chat-parent');
    const scrollOptions = {
      left: 0,
      top: content.offsetHeight,
    };
    parent.scrollTo(scrollOptions);
  }
  something($event: any) {
    $event.preventDefault();
    console.log($event);
  }

}
