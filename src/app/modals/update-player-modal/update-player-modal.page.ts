import { Component, OnInit } from '@angular/core';
import { LeagueService, SecurePlayer, Players } from 'src/app/services/league.service';
import { Observable } from 'rxjs';
import { NavParams, ModalController } from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-update-player-modal',
  templateUrl: './update-player-modal.page.html',
  styleUrls: ['./update-player-modal.page.scss'],
})
export class UpdatePlayerModalPage implements OnInit {

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
  constructor(private store: Storage, private serv: LeagueService, private navParams: NavParams,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.store.get('session').then(resp => {
      this.teamResponse = this.serv.getTeams(resp);
      this.teamResponse.subscribe(data => {
        this.teams = data.Teams;
        this.store.set('session', data.Session);
      });
    });

    this.inPlayer.PlayerID = this.navParams.get('PlayerID');
    this.inPlayer.PlayerName = this.navParams.get('PlayerName');
    this.inPlayer.PlayerSurname = this.navParams.get('PlayerSurname');
    this.inPlayer.PlayerAge = this.navParams.get('PlayerAge');
    this.inPlayer.PlayerAverage = this.navParams.get('PlayerAverage');
    this.inPlayer.TeamID = this.navParams.get('TeamID');
  }

  UpdatePlayer() {
    this.store.get('session').then(resp => {
      console.log(this.inPlayer);
      this.serv.UpdatePlayer(this.inPlayer, resp).subscribe(data => {
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
