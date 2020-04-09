import { Component, OnInit } from '@angular/core';
import { SecureTeams, SecureTeam, Team, LeagueService, SecureLeagues, League } from 'src/app/services/league.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-add-team-modal',
  templateUrl: './add-team-modal.page.html',
  styleUrls: ['./add-team-modal.page.scss'],
})
export class AddTeamModalPage implements OnInit {

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
  constructor(private modalCtrl: ModalController, private store: Storage, private serv: LeagueService, private router: Router) { }

  ngOnInit() {
    this.store.get('session').then(resp => {
      this.leagueResponse = this.serv.GetLeagues(resp);
      this.leagueResponse.subscribe(data => {
        this.leagues = data.League;
        this.store.set('session', data.Session);
      });
    });
  }

  AddTeam() {
    this.store.get('session').then(resp => {
      console.log(this.inTeam);
      this.serv.AddTeam(this.inTeam, resp).subscribe(data => {
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
