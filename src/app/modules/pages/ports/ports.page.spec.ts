import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortsPage } from './ports.page';

describe('PortsPage', () => {
  let component: PortsPage;
  let fixture: ComponentFixture<PortsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
