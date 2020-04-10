import { Component, OnInit } from '@angular/core';
import { AuthService, Session } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { ModalController, ToastController } from '@ionic/angular';
import { RegisterModalPage } from '../modals/register-modal/register-modal.page';

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
  constructor(private serv: AuthService, private router: Router, private store: Storage,
              private modalCtrl: ModalController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  Login() {
    console.log(this.login);
    this.returnType = this.serv.Login(this.login);
    this.returnType.subscribe(data => {
      if (data.Error === null) {
        this.router.navigateByUrl('/tabs/tabs/tab1');
        this.store.set('session', data);
      } else {
        this.error = data.Error;
        this.presentToast();
      }
    });
  }

  async Register() {
    const modal = this.modalCtrl.create({
      component: RegisterModalPage
    });

    return (await modal).present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: this.error,
      duration: 2000,
      color: 'warning'
    });
    toast.present();
  }
}
