import { Component, Input } from '@angular/core';
import { TasklistitemComponent } from './tastklistitem/tastklistitem.component';
import { CheckbuttonComponent } from '../../buttons/checkbutton/checkbutton.component';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NgFor } from '@angular/common';
import { Task } from '../task.model';
import { ButtonsComponent } from '../../buttons/buttons.component';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    TasklistitemComponent,
    CheckbuttonComponent,
    NgFor,
    ButtonsComponent,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.db
      .list<Task>('tasks')
      .valueChanges()
      .subscribe((tasks) => {
        this.tasks = tasks;
      });
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  editTask(task: Task, editedInfo: string) {
    task.info = editedInfo;
    console.log('edit task', task);
  }

  updateTaskCheckStatus(task: Task, checked: boolean) {
    task.checked = checked;
  }
}
