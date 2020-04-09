import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddLeagueModalPage } from './add-league-modal.page';

describe('AddLeagueModalPage', () => {
  let component: AddLeagueModalPage;
  let fixture: ComponentFixture<AddLeagueModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLeagueModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddLeagueModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
