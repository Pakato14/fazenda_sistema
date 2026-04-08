import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoRacaoComponent } from './consumo-racao.component';

describe('ConsumoRacaoComponent', () => {
  let component: ConsumoRacaoComponent;
  let fixture: ComponentFixture<ConsumoRacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsumoRacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumoRacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
