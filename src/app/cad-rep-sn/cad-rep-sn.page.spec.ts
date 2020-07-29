import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadRepSnPage } from './cad-rep-sn.page';

describe('CadRepSnPage', () => {
  let component: CadRepSnPage;
  let fixture: ComponentFixture<CadRepSnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadRepSnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadRepSnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
