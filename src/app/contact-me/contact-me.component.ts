import { Component, OnInit } from '@angular/core';
import Message from '../moduls/message';
import { MessageService } from '../message.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  
  message: Message = new Message();


  constructor(private messageService: MessageService, private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  saveMessage(): void {
    
    if (this.message.name && this.message.email && this.message.message) {
      this.messageService.create(this.message).then(() => {
        this.dialog.open(ContactmeDialog);
      });
      this.message.name = '';
      this.message.email = '';
      this.message.message = '';
    }
  }

  contactForm() {
    alert('message is send');
  }
  isDisabled = true;
}
@Component({
  selector: 'contactme-dialog',
  templateUrl: 'dialog.component.html',
})
export class ContactmeDialog {}

