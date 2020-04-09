import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTeamModalPage } from './add-team-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddTeamModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTeamModalPageRoutingModule {}
