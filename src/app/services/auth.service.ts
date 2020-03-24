import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Session {
  UserID: string;
  SessionID: string;
  Type: number;
  Error: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server = 'https://localhost:44378/';
  path = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }


  Login(user) {
    this.path = 'api/Auth/Login';
    return this.http.post<Session>(this.server + this.path, user, this.httpOptions);
  }
}
