import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interface/contact.interface';
import { Observable } from 'rxjs';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {
  contacts!: Observable<Contact[]>;
  readonly ROOT_URL = 'http://localhost:3000/api/v1';

  constructor(private _contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contacts = this._contactsService.getContacts();
  }

}
