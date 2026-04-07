import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleAnimaisComponent } from './controle-animais.component';

describe('ControleAnimaisComponent', () => {
  let component: ControleAnimaisComponent;
  let fixture: ComponentFixture<ControleAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControleAnimaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
