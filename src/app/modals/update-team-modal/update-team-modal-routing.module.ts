import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTeamModalPage } from './update-team-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTeamModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTeamModalPageRoutingModule {}
