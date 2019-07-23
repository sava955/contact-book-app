import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  
  getContacts(): Observable<any> {
    return this.http.get('http://localhost:3000/get');
  }

  getContact(contactId: string): Observable<any> {
    return this.http.get(`http://localhost:3000/get/${contactId}`);
  }

  addContact(contact: any): Observable<any> {
    return this.http.post('http://localhost:3000/post', contact);
  }

  deleteContact(contactId: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/delete/${contactId}`);
  }

  updateContact(contactData: any): Observable<any> {
    return this.http.put('http://localhost:3000/put', contactData);
  }
}
