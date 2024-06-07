import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaDetailComponent } from './experiencia-detail.component';

describe('ExperienciaDetailComponent', () => {
  let component: ExperienciaDetailComponent;
  let fixture: ComponentFixture<ExperienciaDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienciaDetailComponent]
    });
    fixture = TestBed.createComponent(ExperienciaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
