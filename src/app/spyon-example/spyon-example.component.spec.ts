import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyonExampleComponent } from './spyon-example.component';

describe('SpyonExampleComponent', () => {
  let component: SpyonExampleComponent;
  let fixture: ComponentFixture<SpyonExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpyonExampleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('amIEligibleForTrip-Yes', () => {
    // act
    component.amIEligibleForTrip();
    expect(component.amIEligible).toBe('Yes you are eligible');
  });

  it('amIEligibleForTrip-NO', () => {
    // act
    spyOn(component, 'checkValidity').and.returnValue(false);
    component.amIEligibleForTrip();
    expect(component.amIEligible).toBe('No you are not eligible');
  });

});
