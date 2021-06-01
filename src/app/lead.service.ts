import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

const serverUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  constructor(private http: HttpClient) {}

  public getLeads() {
    let myResponse = this.http.get<any>(serverUrl + 'leads/getLeads');
    return myResponse;
  }
  public getLead(id: string) {
    let myResponse = this.http.get<any>(serverUrl + 'leads/getLead/' + id);
    return myResponse;
  }
  login(data: any): Observable<any> {
    return this.http.post(serverUrl + 'user/login', data);
  }
  register(data: any): Observable<any> {
    return this.http.post(serverUrl + 'leads/add', data);
  }

  upload(data: any): Observable<any> {
    return this.http.post<any>(serverUrl + 'leads/upload', data);
  }
}
