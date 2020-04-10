import { Component, OnInit } from '@angular/core';
import { LeagueService, SecureUserTypes, UserType } from '../services/league.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';
import { Observable } from 'rxjs';
import { AddUserTypeModalPage } from '../modals/add-user-type-modal/add-user-type-modal.page';
import { UpdateUserTypeModalPage } from '../modals/update-user-type-modal/update-user-type-modal.page';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private router: Router, private store: Storage, private serv: LeagueService, private modalController: ModalController) { }

  usertypes: Observable<SecureUserTypes>;
  tableData: UserType[];
  ngOnInit() {
    this.store.get('session').then(sess => {
      console.log(sess);
      this.usertypes = this.serv.GetUserType(sess);
      this.usertypes.subscribe(data => {
        this.tableData = data.UserTypes;
        console.log(this.tableData);
        this.store.set('session', data.Session);
       });
    });
  }

  async UpdateModal(league) {
    const modal = await this.modalController.create({
      component: UpdateUserTypeModalPage,
      componentProps: league
    });
    return await modal.present();
  }

  async AddModal() {
    const modal = await this.modalController.create({
      component: AddUserTypeModalPage
    });
    modal.onDidDismiss().then(() => {
      this.reActivate();
    });
    return await modal.present();
  }

  reActivate() {
    this.store.get('session').then(sess => {
      console.log(sess);
      this.usertypes = this.serv.GetUserType(sess);
      this.usertypes.subscribe(data => {
        this.tableData = data.UserTypes;
        console.log(this.tableData);
        this.store.set('session', data.Session);
       });
    });
  }
}
