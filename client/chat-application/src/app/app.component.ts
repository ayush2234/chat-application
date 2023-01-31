import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMessage = '';
  messageList: string[] = [];

  constructor(private chatService: ChatService){}

  ngOnInit(){
    this.chatService.getNewMessage()
    .subscribe((message: string) => {
      this.messageList.push(message)
      console.log('this', this.messageList)
    })
  }

  sendMessage(){
    this.chatService.sendmessage(this.newMessage)
    this.newMessage = ''
  }
}
