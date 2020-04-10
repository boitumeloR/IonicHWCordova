import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserTypeModalPage } from './add-user-type-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddUserTypeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUserTypeModalPageRoutingModule {}
