import { Component, OnInit } from '@angular/core';
import { League, LeagueService } from 'src/app/services/league.service';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-update-league-modal',
  templateUrl: './update-league-modal.page.html',
  styleUrls: ['./update-league-modal.page.scss'],
})
export class UpdateLeagueModalPage implements OnInit {

  inLeague: League = {
    LeagueID: 0,
    LeagueName: '',
    LeagueLevel: null
  };
  constructor(private modalCtrl: ModalController, private store: Storage,
              private serv: LeagueService, private router: Router,
              private navParams: NavParams, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.inLeague.LeagueID = this.navParams.get('LeagueID');
    this.inLeague.LeagueName = this.navParams.get('LeagueName');
    this.inLeague.LeagueLevel = this.navParams.get('LeagueLevel');
  }

  UpdateLeague() {
    this.store.get('session').then(resp => {
      console.log(this.inLeague);
      this.serv.UpdateLeague(this.inLeague, resp).subscribe(data => {
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
