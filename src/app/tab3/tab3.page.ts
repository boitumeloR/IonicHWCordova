import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SecureLeagues, League, LeagueService } from '../services/league.service';
import {Storage} from '@ionic/storage';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddLeagueModalPage } from '../modals/add-league-modal/add-league-modal.page';
import { UpdateLeagueModalPage } from '../modals/update-league-modal/update-league-modal.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private router: Router, private store: Storage, private serv: LeagueService, private modalController: ModalController) {}

  leagues: Observable<SecureLeagues>;
  tableData: League[];

  ngOnInit() {
    this.store.get('session').then(sess => {
      console.log(sess);
      this.leagues = this.serv.GetLeagues(sess);
      this.leagues.subscribe(data => {
        this.tableData = data.Leagues;
        console.log(this.tableData);
        this.store.set('session', data.Session);
       });
    });
  }

  async UpdateModal(league) {
    const modal = await this.modalController.create({
      component: UpdateLeagueModalPage,
      componentProps: league
    });

    modal.onDidDismiss().then(() => {
      this.reActivate();
    });
    return await modal.present();
  }

  async AddModal() {
    const modal = await this.modalController.create({
      component: AddLeagueModalPage
    });
    modal.onDidDismiss().then(() => {
      this.reActivate();
    });
    return await modal.present();
  }

  reActivate() {
    this.store.get('session').then(sess => {
      console.log(sess);
      this.leagues = this.serv.GetLeagues(sess);
      this.leagues.subscribe(data => {
        this.tableData = data.Leagues;
        console.log(this.tableData);
        this.store.set('session', data.Session);
       });
    });
  }
}
