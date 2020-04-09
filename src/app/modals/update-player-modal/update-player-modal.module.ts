import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePlayerModalPageRoutingModule } from './update-player-modal-routing.module';

import { UpdatePlayerModalPage } from './update-player-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePlayerModalPageRoutingModule
  ],
  declarations: [UpdatePlayerModalPage]
})
export class UpdatePlayerModalPageModule {}
