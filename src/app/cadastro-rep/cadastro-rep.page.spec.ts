import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroRepPage } from './cadastro-rep.page';

describe('CadastroRepPage', () => {
  let component: CadastroRepPage;
  let fixture: ComponentFixture<CadastroRepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroRepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroRepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
