import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocalNotificationPage } from './local-notification.page';

describe('LocalNotificationPage', () => {
  let component: LocalNotificationPage;
  let fixture: ComponentFixture<LocalNotificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalNotificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
