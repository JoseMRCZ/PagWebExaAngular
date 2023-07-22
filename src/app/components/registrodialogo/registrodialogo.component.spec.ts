import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodialogoComponent } from './registrodialogo.component';

describe('RegistrodialogoComponent', () => {
  let component: RegistrodialogoComponent;
  let fixture: ComponentFixture<RegistrodialogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrodialogoComponent]
    });
    fixture = TestBed.createComponent(RegistrodialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
