import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdashbrdComponent } from './customerdashbrd.component';

describe('CustomerdashbrdComponent', () => {
  let component: CustomerdashbrdComponent;
  let fixture: ComponentFixture<CustomerdashbrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerdashbrdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerdashbrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
