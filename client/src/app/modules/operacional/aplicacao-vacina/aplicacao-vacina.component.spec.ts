import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacaoVacinaComponent } from './aplicacao-vacina.component';

describe('AplicacaoVacinaComponent', () => {
  let component: AplicacaoVacinaComponent;
  let fixture: ComponentFixture<AplicacaoVacinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AplicacaoVacinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplicacaoVacinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
