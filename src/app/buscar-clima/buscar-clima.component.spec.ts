import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarClimaComponent } from './buscar-clima.component';

describe('BuscarClimaComponent', () => {
  let component: BuscarClimaComponent;
  let fixture: ComponentFixture<BuscarClimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarClimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
