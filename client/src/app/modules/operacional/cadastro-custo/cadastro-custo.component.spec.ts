import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCustoComponent } from './cadastro-custo.component';

describe('CadastroCustoComponent', () => {
  let component: CadastroCustoComponent;
  let fixture: ComponentFixture<CadastroCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroCustoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
