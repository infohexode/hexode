import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lead } from './lead';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  constructor(private http: HttpClient) {}

  getLeads(): Observable<Lead[]> {
    return this.http.get<Lead[]>('http://localhost:8000/leads');
  }

  getLead(MobileNumber: string): Observable<Lead> {
      console.log(MobileNumber);
    return this.http.get<Lead>('http://localhost:8000/leads/' + MobileNumber);
  }
}
