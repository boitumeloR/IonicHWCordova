import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { LeagueService, Players, SecurePlayers, SecurePlayer } from 'src/app/services/league.service';
import { Observable } from 'rxjs';
import { Session } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player-modal',
  templateUrl: './add-player-modal.page.html',
  styleUrls: ['./add-player-modal.page.scss'],
})
export class AddPlayerModalPage implements OnInit {

  player: SecurePlayer;
  teamResponse: Observable<any>;
  selectTeam: number;
  teams: any[];
  inPlayer: Players = {
    PlayerID: 0,
    PlayerName: '',
    PlayerSurname: '',
    PlayerAge: null,
    PlayerAverage: null,
    TeamID: 0
  };
  constructor(private modalCtrl: ModalController, private store: Storage, private serv: LeagueService, private router: Router) { }

  ngOnInit() {
    this.store.get('session').then(resp => {
      this.teamResponse = this.serv.getTeams(resp);
      this.teamResponse.subscribe(data => {
        this.teams = data.Teams;
        this.store.set('session', data.Session);
      });
    });
  }
  AddPlayer() {
    this.store.get('session').then(resp => {
      console.log(this.inPlayer);
      this.serv.AddPlayer(this.inPlayer, resp).subscribe(data => {
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
