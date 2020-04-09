import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateLeagueModalPage } from './update-league-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateLeagueModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateLeagueModalPageRoutingModule {}
