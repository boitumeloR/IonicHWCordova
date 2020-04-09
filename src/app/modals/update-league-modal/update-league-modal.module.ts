import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateLeagueModalPageRoutingModule } from './update-league-modal-routing.module';

import { UpdateLeagueModalPage } from './update-league-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateLeagueModalPageRoutingModule
  ],
  declarations: [UpdateLeagueModalPage]
})
export class UpdateLeagueModalPageModule {}
