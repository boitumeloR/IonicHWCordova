import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTeamModalPageRoutingModule } from './add-team-modal-routing.module';

import { AddTeamModalPage } from './add-team-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTeamModalPageRoutingModule
  ],
  declarations: [AddTeamModalPage]
})
export class AddTeamModalPageModule {}
