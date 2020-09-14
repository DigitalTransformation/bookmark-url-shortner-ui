import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Card} from '../model/card';
import {Email} from '../model/email';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  private postemailUrl: string;
  constructor(private http: HttpClient) {
    this.postemailUrl = 'https://localhost:8081/email-validate';
  }

  public save(email: Email){
    return this.http.post<Card>(this.postemailUrl, email);
  }
}
