import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPlayerModalPage } from './add-player-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddPlayerModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPlayerModalPageRoutingModule {}
