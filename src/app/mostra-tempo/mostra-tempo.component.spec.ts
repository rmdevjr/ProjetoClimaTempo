import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraTempoComponent } from './mostra-tempo.component';

describe('MostraTempoComponent', () => {
  let component: MostraTempoComponent;
  let fixture: ComponentFixture<MostraTempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostraTempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
