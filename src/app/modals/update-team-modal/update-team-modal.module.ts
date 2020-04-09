import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTeamModalPageRoutingModule } from './update-team-modal-routing.module';

import { UpdateTeamModalPage } from './update-team-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTeamModalPageRoutingModule
  ],
  declarations: [UpdateTeamModalPage]
})
export class UpdateTeamModalPageModule {}
