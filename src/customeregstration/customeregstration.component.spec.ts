import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeregstrationComponent } from './customeregstration.component';

describe('CustomeregstrationComponent', () => {
  let component: CustomeregstrationComponent;
  let fixture: ComponentFixture<CustomeregstrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeregstrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomeregstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
