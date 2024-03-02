import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistitemComponent } from './tastklistitem.component';

describe('TastklistitemComponent', () => {
  let component: TasklistitemComponent;
  let fixture: ComponentFixture<TasklistitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasklistitemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TasklistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
