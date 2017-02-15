import {Component} from "@angular/core";

declare var NativeKeyboard;

@Component({
  selector: 'chat-page',
  templateUrl: 'chat.html'
})
export class ChatPage {
  constructor() {

  }

  ionViewDidEnter() {
    NativeKeyboard.showMessenger({
      onSubmit: (text) => {
        console.log("The user typed: " + text);
      },
      rightButton: {
        value: 'Send'
      },
      placeholder: 'Type a message...',
      keepOpenAfterSubmit: true,
      scrollToBottomAfterMessengerShows: true,
      animated: true,
      backgroundColor: '#ffffff',
      textViewBackgroundColor: '#ffffff',
      textViewBorderColor: '#ffffff',
      type: 'twitter'
    });
  }
}
