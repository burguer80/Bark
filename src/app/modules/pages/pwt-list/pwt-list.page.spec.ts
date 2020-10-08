import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PwtListPage } from './pwt-list.page';

describe('PwtListPage', () => {
  let component: PwtListPage;
  let fixture: ComponentFixture<PwtListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwtListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PwtListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
