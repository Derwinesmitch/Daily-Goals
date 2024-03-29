import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbuttonComponent } from './checkbutton.component';

describe('CheckbuttonComponent', () => {
  let component: CheckbuttonComponent;
  let fixture: ComponentFixture<CheckbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
