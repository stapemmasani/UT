import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form status is invalid', () => {
    expect(fixture.componentInstance.form.invalid).toBe(true);
  });

  it('should have form status as valid', () => {
    // arrange
    fixture.componentInstance.form.patchValue({
      name: 'ABC',
      email: 'abc@abc.com',
      address: 'Pune'
    });
    fixture.detectChanges();
    expect(fixture.componentInstance.form.invalid).toBe(false);
  });
});
