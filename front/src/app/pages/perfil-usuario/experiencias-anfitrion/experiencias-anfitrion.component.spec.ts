import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciasAnfitrionComponent } from './experiencias-anfitrion.component';

describe('ExperienciasAnfitrionComponent', () => {
  let component: ExperienciasAnfitrionComponent;
  let fixture: ComponentFixture<ExperienciasAnfitrionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienciasAnfitrionComponent]
    });
    fixture = TestBed.createComponent(ExperienciasAnfitrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
