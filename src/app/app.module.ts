import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AddPlayerModalPage } from './modals/add-player-modal/add-player-modal.page';
import {FormsModule} from '@angular/forms';
import { UpdatePlayerModalPage } from './modals/update-player-modal/update-player-modal.page';
import { AddTeamModalPage } from './modals/add-team-modal/add-team-modal.page';
import { UpdateTeamModalPage } from './modals/update-team-modal/update-team-modal.page';
import { AddLeagueModalPage } from './modals/add-league-modal/add-league-modal.page';
import { UpdateLeagueModalPage } from './modals/update-league-modal/update-league-modal.page';
import { AddUserTypeModalPage } from './modals/add-user-type-modal/add-user-type-modal.page';
import { UpdateUserTypeModalPage } from './modals/update-user-type-modal/update-user-type-modal.page';
import { RegisterModalPage } from './modals/register-modal/register-modal.page';
import { UpdateUserModalPage } from './modals/update-user-modal/update-user-modal.page';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerModalPage,
    UpdatePlayerModalPage,
    AddTeamModalPage,
    UpdateTeamModalPage,
    AddLeagueModalPage,
    UpdateLeagueModalPage,
    AddUserTypeModalPage,
    UpdateUserTypeModalPage,
    RegisterModalPage,
    UpdateUserModalPage
  ],
  entryComponents: [
    AddPlayerModalPage,
    UpdatePlayerModalPage,
    AddTeamModalPage,
    UpdateTeamModalPage,
    AddLeagueModalPage,
    UpdateLeagueModalPage,
    AddUserTypeModalPage,
    UpdateUserTypeModalPage,
    RegisterModalPage,
    UpdateUserModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    FormsModule
  ],
  providers: [
    StatusBar,
    IonicStorageModule,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
