import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
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
export class ContactDetailComponent implements OnInit {
  contact: any;
  isEdited = false;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getContact();
  }

  edit() {
    this.isEdited = true;
  }

  delete(contactId: string) {
    this.contactService.deleteContact(contactId).subscribe(
      (contact: any) => {
        this.router.navigate(['/contacts']);
      }
    )
  }

  getContact() {
    const contactId = this.route.snapshot.paramMap.get('contactId');
    this.contactService.getContact(contactId).subscribe(
      (contact: any) => {
        this.contact = contact[0];
      }
    )
  }

  update() {
    this.contactService.updateContact(this.contact).subscribe(
      (contact: any) => {
        this.isEdited = false;
      }
    )
  }

  cancle() {
    this.isEdited = false;
  }

}
