import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'update-player-modal',
    loadChildren: () => import('./modals/update-player-modal/update-player-modal.module').then( m => m.UpdatePlayerModalPageModule)
  },
  {
    path: 'add-team-modal',
    loadChildren: () => import('./modals/add-team-modal/add-team-modal.module').then( m => m.AddTeamModalPageModule)
  },
  {
    path: 'update-team-modal',
    loadChildren: () => import('./modals/update-team-modal/update-team-modal.module').then( m => m.UpdateTeamModalPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'add-league-modal',
    loadChildren: () => import('./modals/add-league-modal/add-league-modal.module').then( m => m.AddLeagueModalPageModule)
  },
  {
    path: 'update-league-modal',
    loadChildren: () => import('./modals/update-league-modal/update-league-modal.module').then( m => m.UpdateLeagueModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
