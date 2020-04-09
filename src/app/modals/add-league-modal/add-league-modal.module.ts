import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLeagueModalPageRoutingModule } from './add-league-modal-routing.module';

import { AddLeagueModalPage } from './add-league-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLeagueModalPageRoutingModule
  ],
  declarations: [AddLeagueModalPage]
})
export class AddLeagueModalPageModule {}
