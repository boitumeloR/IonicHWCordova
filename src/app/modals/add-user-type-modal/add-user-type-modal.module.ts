import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUserTypeModalPageRoutingModule } from './add-user-type-modal-routing.module';

import { AddUserTypeModalPage } from './add-user-type-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUserTypeModalPageRoutingModule
  ],
  declarations: [AddUserTypeModalPage]
})
export class AddUserTypeModalPageModule {}
