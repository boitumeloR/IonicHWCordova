import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Storage} from '@ionic/storage';
import { async } from '@angular/core/testing';
import { SecureClientSessionOptions } from 'http2';


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
  Players: Players[];
}
export interface SecurePlayer {
  Session: Session;
  Player: Players;
}

export interface Team {
  TeamID: number;
  TeamName: string;
  TeamAverage: number;
  LeagueID: number;
}

export interface SecureTeam {
  Team: Team;
  Session: Session;
}

export interface SecureTeams {
  Teams: Team[];
  Session: Session;
}

export interface League {
  LeagueID: number;
  LeagueName: string;
  LeagueLevel: number;
}

export interface SecureLeague {
  League: League;
  Session: Session;
}

export interface SecureLeagues {
  Leagues: League[];
  Session: Session;
}

export interface UserType {
  UserTypeID: number;
  UserTypeDescription: string;
}

export interface SecureUserTypes {
  UserTypes: UserType[];
  Session: Session;
}

export interface SecureUserType {
  UserType: UserType;
  Session: Session;
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

  getPlayers(sess) {
    this.path = 'api/League/GetPlayers';
    console.log(sess);
    return this.http.post<SecurePlayers>(this.server + this.path, sess, this.httpOptions);
  }

  getTeams(sess) {
    this.path = 'api/League/GetSecureTeams';
    return this.http.post<SecurePlayers>(this.server + this.path, sess, this.httpOptions);
  }
  AddPlayer(player, session) {
    this.path = 'api/League/AddPlayer';
    const inPlayer: SecurePlayer = {
      Player: player,
      Session: session
    };
    return this.http.post<Session>(this.server + this.path, inPlayer, this.httpOptions);
  }

  UpdatePlayer(player, session) {
    this.path = 'api/League/UpdatePlayer';
    const inPlayer: SecurePlayer = {
      Player: player,
      Session: session
    };
    return this.http.post<Session>(this.server + this.path, inPlayer, this.httpOptions);
  }

  DeletePlayer(player, session) {
    this.path = 'api/League/DeletePlayer';
    const inPlayer: SecurePlayer = {
      Player: player,
      Session: session
    };
    return this.http.post<Session>(this.server + this.path, inPlayer, this.httpOptions);
  }

  // Teams
  GetTeams(sess) {
    this.path = 'api/League/GetSecureTeams';
    return this.http.post<SecureTeams>(this.server + this.path, sess, this.httpOptions );
  }

  AddTeam(team, session) {
    this.path = 'api/League/AddTeam';
    const inTeam: SecureTeam = {
      Team: team,
      Session: session
    };
    return this.http.post<Session>(this.server + this.path, inTeam, this.httpOptions);
  }

  UpdateTeam(team, session) {
    this.path = 'api/League/UpdateTeam';
    const inTeam: SecureTeam = {
      Team: team,
      Session: session
    };
    return this.http.post<Session>(this.server + this.path, inTeam, this.httpOptions);
  }

  // League

  GetLeagues(sess) {
    this.path = 'api/League/GetSecureLeague';
    return this.http.post<SecureLeagues>(this.server + this.path, sess, this.httpOptions);
  }

  AddLeague(league, session) {
    this.path = 'api/League/AddLeague';
    const inLeague: SecureLeague = {
      League: league,
      Session: session
    };
    return this.http.post<Session>(this.server + this.path, inLeague, this.httpOptions);
  }

  UpdateLeague(league, session) {
    this.path = 'api/League/UpdateLeague';
    const inLeague: SecureLeague = {
      League: league,
      Session: session
    };
    return this.http.post<Session>(this.server + this.path, inLeague, this.httpOptions);
  }

  // UserTypes

  GetUserType(sess) {
    this.path = 'api/League/GetUserTypes';
    return this.http.post<SecureUserTypes>(this.server + this.path, sess, this.httpOptions);
  }

  GetUnsecureUserType() {
    this.path = 'api/Auth/GetUserTypes';
    return this.http.get<UserType[]>(this.server + this.path);
  }

  AddUserType(usertype, session) {
    this.path = 'api/League/AddUserType';
    const inType: SecureUserType = {
      UserType: usertype,
      Session: session
    };

    return this.http.post<Session>(this.server + this.path, inType , this.httpOptions);
  }

  UpdateUserType(usertype, session) {
    this.path = 'api/League/UpdateUserType';

    const inType: SecureUserType = {
      UserType: usertype,
      Session: session
    };

    return this.http.post<Session>(this.server + this.path, inType , this.httpOptions);
  }
}
