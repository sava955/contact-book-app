import { Component, OnInit, HostBinding } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('ul, .d-flex', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})
export class ContactListComponent implements OnInit {
  contacts: any;
  @HostBinding('@pageAnimations')
  public animatePage = true;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts().subscribe(
      (contacts) => {
        this.contacts = contacts;
      }
    )
  }

}
