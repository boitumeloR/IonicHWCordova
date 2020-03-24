import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-player-modal',
  templateUrl: './add-player-modal.page.html',
  styleUrls: ['./add-player-modal.page.scss'],
})
export class AddPlayerModalPage {

  constructor(private modalCtrl: ModalController) { }


  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
