import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService, SecurePlayers, Players } from '../services/league.service';
import { Observable } from 'rxjs';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  players: Observable<SecurePlayers>;
  tableData: Players[];
  constructor(private router: Router, private store: Storage, private serv: LeagueService) {}

  ngOnInit() {
    this.players = this.serv.getPlayers();
    this.players.subscribe(data => {
      this.tableData = data.Player;
      console.log(data);
      this.store.set('session', JSON.stringify(data.Session));
     });
  }

  UpdatePlayer(item) {
    this.router.navigateByUrl('tabs/tabs/tab2');
  }
}
