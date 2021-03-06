import { Component, OnInit } from '@angular/core';
import { SecureUserType, UserType, LeagueService } from 'src/app/services/league.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-add-user-type-modal',
  templateUrl: './add-user-type-modal.page.html',
  styleUrls: ['./add-user-type-modal.page.scss'],
})
export class AddUserTypeModalPage implements OnInit {

  usertype: SecureUserType;
  usertypes: UserType[];
  inUserType: UserType = {
    UserTypeID: 0,
    UserTypeDescription: ''
  };
  constructor(private modalCtrl: ModalController, private store: Storage, private serv: LeagueService,
              private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  AddUserType() {
    this.store.get('session').then(resp => {
      console.log(this.inUserType);
      this.serv.AddUserType(this.inUserType, resp).subscribe(data => {
        if (data.Error === null) {
          this.store.set('session', data);
          this.presentToast().then(() => {
            this.modalCtrl.dismiss({
              dismissed: true
            });
          });
        }
      });
    });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your changes have been saved.',
      duration: 2000
    });
    toast.present();
  }
}
