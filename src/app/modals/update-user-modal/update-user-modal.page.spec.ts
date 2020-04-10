import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateUserModalPage } from './update-user-modal.page';

describe('UpdateUserModalPage', () => {
  let component: UpdateUserModalPage;
  let fixture: ComponentFixture<UpdateUserModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateUserModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
