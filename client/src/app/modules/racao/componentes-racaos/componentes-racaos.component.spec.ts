import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesRacaosComponent } from './componentes-racaos.component';

describe('ComponentesRacaosComponent', () => {
  let component: ComponentesRacaosComponent;
  let fixture: ComponentFixture<ComponentesRacaosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentesRacaosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentesRacaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
