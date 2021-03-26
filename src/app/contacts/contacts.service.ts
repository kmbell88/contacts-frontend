import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from 'src/interface/contact.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  readonly ROOT_URL = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get<Contact[]>(this.ROOT_URL + '/contacts').pipe(map(data => data.sort((a, b) => a.lname < b.lname ? -1 : 1)));
  }
  
  createContact(fname: string, lname: string, phone?: string, email?: string) {
    // this.http.post(ROOT_URL + '/contacts', data);
  };

  updateContact(id: string, fname?: string, lname?: string, phone?: string, email?: string) {
    // this.http.patch(ROOT_URL + '/contacts', data);
  };

  deleteContact(id: string) {
    this.http.delete(this.ROOT_URL + '/contacts/id/' + id);
  };

}
