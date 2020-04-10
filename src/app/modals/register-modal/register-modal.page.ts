import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login/login.page';
import { Observable } from 'rxjs';
import { AuthService, Session } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { LeagueService, UserType } from 'src/app/services/league.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.page.html',
  styleUrls: ['./register-modal.page.scss'],
})
export class RegisterModalPage implements OnInit {

  login: Login = {
    Username: '',
    Password: '',
    UserTypeID: 0
  };
  returnType: Observable<Session>;
  UserTypes: UserType[];
  error: string;

  constructor(private serv: AuthService, private router: Router, private store: Storage,
              private modalCtrl: ModalController, private leagueServ: LeagueService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.store.get('session').then(sess => {
      this.leagueServ.GetUserType(sess).subscribe(data => {
        this.UserTypes = data.UserTypes;
        this.store.set('session', data.Session);
      });
    });
  }

  Register() {
    console.log(this.login);
    this.returnType = this.serv.Register(this.login);
    this.returnType.subscribe(data => {
      if (data.Error === null) {
        this.store.set('session', data);
        this.modalCtrl.dismiss({
          dismissed: true
        });
      } else {
        this.error = data.Error;
      }
    });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
