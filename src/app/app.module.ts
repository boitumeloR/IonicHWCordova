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

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerModalPage,
    UpdatePlayerModalPage,
    AddTeamModalPage,
    UpdateTeamModalPage
  ],
  entryComponents: [
    AddPlayerModalPage,
    UpdatePlayerModalPage,
    AddTeamModalPage,
    UpdateTeamModalPage
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
