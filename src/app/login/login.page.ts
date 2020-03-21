import { Component, OnInit } from '@angular/core';
import { AuthService, Session } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

export interface Login {
  Username: string;
  Password: string;
  UserTypeID: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: Login = {
    Username: '',
    Password: '',
    UserTypeID: 0
  };
  returnType: Observable<Session>;
  error: string;
  constructor(private serv: AuthService, private router: Router, private store: Storage) { }

  ngOnInit() {
  }

  Login() {
    console.log(this.login);
    this.returnType = this.serv.Login(this.login);
    this.returnType.subscribe(data => {
      if (data.Error === null) {
        this.router.navigateByUrl('/tabs/tabs/tab1');
        this.store.set('session', JSON.stringify(data));
      } else {
        this.error = data.Error;
      }
    });
  }
}
