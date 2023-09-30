import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../models/contact";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {
  }

  contactList(): Observable<Contact[]> {
    return this.http.get<Contact[]>(environment.apiURL);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(environment.apiURL, contact, httpOptions);
  }

  deleteContact(idContact: number) {
    const url = `${environment.apiURL}/${idContact}`;
    return this.http.delete(url, httpOptions);
  }

  getContactById(idContact: number): Observable<Contact> {
    const url = `${environment.apiURL}/${idContact}`;
    return this.http.get<Contact>(url);
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(environment.apiURL, contact, httpOptions);
  }
}
