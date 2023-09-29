import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../models/contact";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiURL: string = 'http://localhost:8081/api-contact/v1'

  constructor(private http: HttpClient) {

  }

  contactList():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.apiURL);
  }
}
