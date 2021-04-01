import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Contact } from '../../interfaces/contact.interface';
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
  contactForm!: FormGroup;
  readonly ROOT_URL = 'http://localhost:3000/api/v1';

  constructor(private _contactsService: ContactsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contacts = this._contactsService.getContacts();
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      fname: null,
      lname: null,
      phone: null,
      email: null
    })
  }

  onSubmit(): void {
    console.log(this.contactForm.value);
  }

}
