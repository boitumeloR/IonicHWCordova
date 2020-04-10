import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private store: Storage, private router: Router) { }

  ngOnInit() {
  }

  Logout() {
    this.store.remove('session').then(() => {
      this.router.navigateByUrl('login');
    })
  }

}
