import { Component, OnInit } from '@angular/core';
import { SecureTeam, SecureLeagues, League, Team, LeagueService } from 'src/app/services/league.service';
import { Observable } from 'rxjs';
import { ModalController, NavParams } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-team-modal',
  templateUrl: './update-team-modal.page.html',
  styleUrls: ['./update-team-modal.page.scss'],
})
export class UpdateTeamModalPage implements OnInit {

  team: SecureTeam;
  leagueResponse: Observable<SecureLeagues>;
  selectTeam: number;
  leagues: League[];
  inTeam: Team = {
    TeamID: 0,
    TeamName: '',
    TeamAverage: null,
    LeagueID: 0
  };
  constructor(private modalCtrl: ModalController, private store: Storage,
              private serv: LeagueService, private router: Router, private navParams: NavParams) { }

  ngOnInit() {
    this.store.get('session').then(resp => {
      this.leagueResponse = this.serv.GetLeagues(resp);
      this.leagueResponse.subscribe(data => {
        this.leagues = data.League;
        this.store.set('session', data.Session);
      });
    });

    this.inTeam.TeamID = this.navParams.get('TeamID');
    this.inTeam.TeamName = this.navParams.get('TeamName');
    this.inTeam.TeamAverage = this.navParams.get('TeamAverage');
    this.inTeam.LeagueID = this.navParams.get('LeagueID');
  }

  UpdateTeam() {
    this.store.get('session').then(resp => {
      console.log(this.inTeam);
      this.serv.UpdateTeam(this.inTeam, resp).subscribe(data => {
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
