import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePlayerModalPage } from './update-player-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePlayerModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePlayerModalPageRoutingModule {}
