import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PwtComponent } from './pwt.component';

describe('PwtComponent', () => {
  let component: PwtComponent;
  let fixture: ComponentFixture<PwtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwtComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PwtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
