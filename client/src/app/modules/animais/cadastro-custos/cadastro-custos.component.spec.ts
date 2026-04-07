import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCustosComponent } from './cadastro-custos.component';

describe('CadastroCustosComponent', () => {
  let component: CadastroCustosComponent;
  let fixture: ComponentFixture<CadastroCustosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroCustosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroCustosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
