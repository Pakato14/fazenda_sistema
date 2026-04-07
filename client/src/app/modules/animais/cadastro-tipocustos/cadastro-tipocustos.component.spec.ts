import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTipocustosComponent } from './cadastro-tipocustos.component';

describe('CadastroTipocustosComponent', () => {
  let component: CadastroTipocustosComponent;
  let fixture: ComponentFixture<CadastroTipocustosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroTipocustosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroTipocustosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
