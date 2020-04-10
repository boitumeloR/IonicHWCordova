import { Component, OnInit } from '@angular/core';
import { UserType, LeagueService } from 'src/app/services/league.service';
import { ModalController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-update-user-type-modal',
  templateUrl: './update-user-type-modal.page.html',
  styleUrls: ['./update-user-type-modal.page.scss'],
})
export class UpdateUserTypeModalPage implements OnInit {

  inUserType: UserType = {
    UserTypeID: 0,
    UserTypeDescription: ''
  };
  constructor(private modalCtrl: ModalController, private store: Storage,
              private serv: LeagueService, private router: Router, private navParams: NavParams) { }

  ngOnInit() {
    this.inUserType.UserTypeID = this.navParams.get('UserTypeID');
    this.inUserType.UserTypeDescription = this.navParams.get('UserTypeDescription');
  }

  UpdateUserType() {
    this.store.get('session').then(resp => {
      console.log(this.inUserType);
      this.serv.UpdateUserType(this.inUserType, resp).subscribe(data => {
        if (data.Error === null) {
          this.store.set('session', data);
          this.modalCtrl.dismiss({
            dismissed: true
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
}
