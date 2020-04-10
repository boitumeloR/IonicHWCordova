import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateUserTypeModalPageRoutingModule } from './update-user-type-modal-routing.module';

import { UpdateUserTypeModalPage } from './update-user-type-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateUserTypeModalPageRoutingModule
  ],
  declarations: [UpdateUserTypeModalPage]
})
export class UpdateUserTypeModalPageModule {}
