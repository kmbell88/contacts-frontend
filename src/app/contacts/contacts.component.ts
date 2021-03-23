import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  readonly ROOT_URL = 'http://localhost:3000/api/v1';
  contacts!: Observable<Contact[]>;

  constructor(private http: HttpClient) { }

  getContacts() {
    this.contacts = this.http.get<Contact[]>(this.ROOT_URL + '/contacts');
  };

  ngOnInit(): void {
    this.getContacts();
  }

}
