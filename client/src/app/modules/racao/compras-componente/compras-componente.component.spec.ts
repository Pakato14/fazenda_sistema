import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasComponenteComponent } from './compras-componente.component';

describe('ComprasComponenteComponent', () => {
  let component: ComprasComponenteComponent;
  let fixture: ComponentFixture<ComprasComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComprasComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
