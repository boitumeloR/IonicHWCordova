import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateUserTypeModalPage } from './update-user-type-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateUserTypeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateUserTypeModalPageRoutingModule {}
