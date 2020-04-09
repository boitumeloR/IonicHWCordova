import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SecurePlayers, Players, LeagueService, SecureTeams, Team } from '../services/league.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UpdateTeamModalPage } from '../modals/update-team-modal/update-team-modal.page';
import { AddTeamModalPage } from '../modals/add-team-modal/add-team-modal.page';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  teams: Observable<SecureTeams>;
  tableData: Team[];

  constructor(private router: Router, private store: Storage, private serv: LeagueService, private modalController: ModalController) {}

  ngOnInit(): void {
    this.store.get('session').then(sess => {
      console.log(sess);
      this.teams = this.serv.GetTeams(sess);
      this.teams.subscribe(data => {
        this.tableData = data.Teams;
        console.log(this.tableData);
        this.store.set('session', data.Session);
       });
    });
  }

  async UpdateModal(team) {
    const modal = await this.modalController.create({
      component: UpdateTeamModalPage,
      componentProps: team
    });
    return await modal.present();
  }

  async AddModal() {
    const modal = await this.modalController.create({
      component: AddTeamModalPage
    });
    modal.onDidDismiss().then(() => {
      this.reActivate();
    });
    return await modal.present();
  }

  reActivate() {
    this.store.get('session').then(sess => {
      console.log(sess);
      this.teams = this.serv.GetTeams(sess);
      this.teams.subscribe(data => {
        this.tableData = data.Teams;
        console.log(this.tableData);
        this.store.set('session', data.Session);
       });
    });
  }

}
