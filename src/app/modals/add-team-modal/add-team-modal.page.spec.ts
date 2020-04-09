import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTeamModalPage } from './add-team-modal.page';

describe('AddTeamModalPage', () => {
  let component: AddTeamModalPage;
  let fixture: ComponentFixture<AddTeamModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeamModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTeamModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
