import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPlayerModalPageRoutingModule } from './add-player-modal-routing.module';

import { AddPlayerModalPage } from './add-player-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPlayerModalPageRoutingModule
  ],
  declarations: [AddPlayerModalPage]
})
export class AddPlayerModalPageModule {}
