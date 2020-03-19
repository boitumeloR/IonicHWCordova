import { Component, OnInit } from '@angular/core';
import { AuthService, Session } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
  constructor(private serv: AuthService, private router: Router) { }

  ngOnInit() {
  }

  Login() {
    this.router.navigateByUrl('tabs/tabs/tab1');
    /*console.log(this.login);
    this.returnType = this.serv.Login(this.login);
    this.returnType.subscribe(data => {
      if (data.Error === null) {
        this.router.navigateByUrl('/tabs/tab1');
      }
    }); */
  }
}
