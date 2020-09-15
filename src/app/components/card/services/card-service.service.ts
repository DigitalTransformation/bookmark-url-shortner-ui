import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  private getcardsUrl: string;
  private postcardsUrl: string;
  constructor(private http: HttpClient) {
    this.getcardsUrl = 'https://localhost:8081/card/all/';
    this.postcardsUrl = 'https://localhost:8081/card/create';
  }

  public findAll(): Observable<Card[]>{
    return this.http.get<Card[]>(this.getcardsUrl);
  }

  public save(card: Card){
    return this.http.post<Card>(this.postcardsUrl, card);
  }


}
