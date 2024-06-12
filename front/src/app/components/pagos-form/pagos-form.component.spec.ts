import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosFormComponent } from './pagos-form.component';

describe('PagosFormComponent', () => {
  let component: PagosFormComponent;
  let fixture: ComponentFixture<PagosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagosFormComponent]
    });
    fixture = TestBed.createComponent(PagosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
