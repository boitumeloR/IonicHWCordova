import { Component, OnInit } from '@angular/core';
import { SecureLeague, League, LeagueService } from 'src/app/services/league.service';
import { ModalController, ToastController } from '@ionic/angular';
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
  constructor(private modalCtrl: ModalController, private store: Storage, private serv: LeagueService,
              private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  AddLeague() {
    this.store.get('session').then(resp => {
      console.log(this.inLeague);
      this.serv.AddLeague(this.inLeague, resp).subscribe(data => {
        if (data.Error === null) {
          this.store.set('session', data);
          this.presentToast().then(() => {
            this.modalCtrl.dismiss({
              dismissed: true
            });
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

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your changes have been saved.',
      duration: 2000
    });
    toast.present();
  }
}
