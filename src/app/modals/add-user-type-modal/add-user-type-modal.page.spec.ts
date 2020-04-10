import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddUserTypeModalPage } from './add-user-type-modal.page';

describe('AddUserTypeModalPage', () => {
  let component: AddUserTypeModalPage;
  let fixture: ComponentFixture<AddUserTypeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserTypeModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddUserTypeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
