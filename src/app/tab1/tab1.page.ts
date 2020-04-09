import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService, SecurePlayers, Players } from '../services/league.service';
import { Observable } from 'rxjs';
import {Storage} from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import {AddPlayerModalPage} from '../modals/add-player-modal/add-player-modal.page';
import {UpdatePlayerModalPage} from '../modals/update-player-modal/update-player-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  players: Observable<SecurePlayers>;
  tableData: Players[];
  constructor(private router: Router, private store: Storage, private serv: LeagueService, private modalController: ModalController) {}

  ngOnInit() {
    this.store.get('session').then(sess => {
      console.log(sess);
      this.players = this.serv.getPlayers(sess);
      this.players.subscribe(data => {
        this.tableData = data.Players;
        console.log(this.tableData);
        this.store.set('session', data.Session);
       });
    });
  }

  async UpdateModal(player) {
    const modal = await this.modalController.create({
      component: UpdatePlayerModalPage,
      componentProps: player
    });
    return await modal.present();
  }

  async AddModal() {
    const modal = await this.modalController.create({
      component: AddPlayerModalPage
    });
    modal.onDidDismiss().then(() => {
      this.reActivate();
    });
    return await modal.present();
  }

  reActivate() {
    this.store.get('session').then(sess => {
      console.log(sess);
      this.players = this.serv.getPlayers(sess);
      this.players.subscribe(data => {
        this.tableData = data.Players;
        console.log(this.tableData);
        this.store.set('session', data.Session);
       });
    });
  }

  UpdatePlayer(item) {
    this.router.navigateByUrl('tabs/tabs/tab2');
  }

  DeletePlayer(player) {
    this.store.get('session').then(sess => {
      this.serv.DeletePlayer(player, sess).subscribe(data => {
        this.store.set('session', data);
        this.reActivate();
      });
    });
  }
}
