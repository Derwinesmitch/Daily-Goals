import { Component, Input } from '@angular/core';
import { TasklistitemComponent } from './tastklistitem/tastklistitem.component';
import { CheckbuttonComponent } from '../../buttons/checkbutton/checkbutton.component';
import { DeletebuttonComponent } from '../../buttons/deletebutton/deletebutton.component';
import { EditbuttonComponent } from '../../buttons/editbutton/editbutton.component';
import { NgFor } from '@angular/common';
import { Task } from '../task.model';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    TasklistitemComponent,
    CheckbuttonComponent,
    DeletebuttonComponent,
    EditbuttonComponent,
    NgFor,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  constructor() {
    this.tasks = [{ info: 'task 1' }, { info: 'task 2' }];
  }
}
