import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRacaoComponent } from './cadastro-racao.component';

describe('CadastroRacaoComponent', () => {
  let component: CadastroRacaoComponent;
  let fixture: ComponentFixture<CadastroRacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroRacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroRacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
