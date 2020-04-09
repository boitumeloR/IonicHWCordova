import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLeagueModalPage } from './add-league-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddLeagueModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLeagueModalPageRoutingModule {}
