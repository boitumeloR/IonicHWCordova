import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateUserTypeModalPage } from './update-user-type-modal.page';

describe('UpdateUserTypeModalPage', () => {
  let component: UpdateUserTypeModalPage;
  let fixture: ComponentFixture<UpdateUserTypeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserTypeModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateUserTypeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
