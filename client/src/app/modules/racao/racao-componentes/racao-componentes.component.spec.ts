import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaoComponentesComponent } from './racao-componentes.component';

describe('RacaoComponentesComponent', () => {
  let component: RacaoComponentesComponent;
  let fixture: ComponentFixture<RacaoComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RacaoComponentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacaoComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
