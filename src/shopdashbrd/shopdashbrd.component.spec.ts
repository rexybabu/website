import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopdashbrdComponent } from './shopdashbrd.component';

describe('ShopdashbrdComponent', () => {
  let component: ShopdashbrdComponent;
  let fixture: ComponentFixture<ShopdashbrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopdashbrdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopdashbrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
