import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Storage} from '@ionic/storage';
import { async } from '@angular/core/testing';


export interface Session {
  UserID: string;
  SessionID: string;
  Type: number;
  Error: string;
}
export interface Players {
  PlayerID: number;
  PlayerName: string;
  PlayerSurname: string;
  PlayerAge: number;
  TeamID: number;
  PlayerAverage: number;
}
export interface SecurePlayers {
  Session: Session;
  Player: Players[];
}
@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  session: any;
  server = 'https://localhost:44378/';
  path = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient, private store: Storage) { }

  getPlayers() {
    this.path = 'api/League/GetPlayers';
    let x: any;
    this.store.get('session').then((sess) => {
      x = sess;
      return sess;
    });
    console.log(this.session);
    return this.http.post<SecurePlayers>(this.server + this.path, this.session, this.httpOptions );
  }
}
