import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadrepPage } from './cadrep.page';

describe('CadrepPage', () => {
  let component: CadrepPage;
  let fixture: ComponentFixture<CadrepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadrepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadrepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
