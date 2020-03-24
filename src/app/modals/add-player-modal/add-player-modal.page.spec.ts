import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPlayerModalPage } from './add-player-modal.page';

describe('AddPlayerModalPage', () => {
  let component: AddPlayerModalPage;
  let fixture: ComponentFixture<AddPlayerModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlayerModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPlayerModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
