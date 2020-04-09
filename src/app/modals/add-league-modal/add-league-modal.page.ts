import { Component, OnInit } from '@angular/core';
import { SecureLeague, League, LeagueService } from 'src/app/services/league.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-add-league-modal',
  templateUrl: './add-league-modal.page.html',
  styleUrls: ['./add-league-modal.page.scss'],
})
export class AddLeagueModalPage implements OnInit {

  league: SecureLeague;
  leagues: League[];
  inLeague: League = {
    LeagueID: 0,
    LeagueName: '',
    LeagueLevel: null
  };
  constructor(private modalCtrl: ModalController, private store: Storage, private serv: LeagueService, private router: Router) { }

  ngOnInit() {
  }

  AddLeague() {
    this.store.get('session').then(resp => {
      console.log(this.inLeague);
      this.serv.AddLeague(this.inLeague, resp).subscribe(data => {
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
