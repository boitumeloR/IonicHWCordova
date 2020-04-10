import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login/login.page';
import { Observable } from 'rxjs';
import { Session } from 'inspector';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-user-modal',
  templateUrl: './update-user-modal.page.html',
  styleUrls: ['./update-user-modal.page.scss'],
})
export class UpdateUserModalPage implements OnInit {

  login: Login = {
    Username: '',
    Password: '',
    UserTypeID: 0
  };
  returnType: Observable<Session>;
  error: string;

  constructor(private serv: AuthService, private router: Router, private store: Storage, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

}
