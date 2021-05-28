import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3002/leads/getLeads';

  public getLeads() {
    let myResponse = this.http.get<any>(this.url);
    return myResponse;
  }
  public getLead(id: string) {
    let myResponse = this.http.get<any>('http://localhost:3002/leads/getLead/' + id);
    return myResponse;
  }
}
