import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class CreateContactComponent implements OnInit {
  newContact: any;

  constructor(
    private contactService: ContactService,
    private router: Router
    ) { }

  ngOnInit() {
    this.newContact = new Contact();
  }

  addContact() {
    this.contactService.addContact(this.newContact).subscribe(
      (contact: any) => {
        this.router.navigate([`${contact.id}`]);
      }
    )
  }

}
