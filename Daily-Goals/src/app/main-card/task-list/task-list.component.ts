import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';
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
    this.db
      .list<Task>('tasks', (ref) => ref.orderByChild('info').equalTo(task.info))
      .snapshotChanges()
      .pipe(
        take(1),
        map((actions) => {
          return actions.map((action) => ({
            key: action.payload.key,
            ...action.payload.val(),
          }));
        })
      )
      .subscribe((tasks) => {
        if (tasks.length > 0) {
          const taskId = tasks[0].key;
          this.db.object(`tasks/${taskId}`).remove();
        }
      });

    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  editTask(task: Task, editedInfo: string) {
    this.deleteTask(task);
    task.info = editedInfo;
    const newTask = { ...task };

    this.db
      .object(`tasks/${newTask.info}`)
      .set(newTask)
      .then(() => {})
      .catch((error) => {});
  }

  updateTaskCheckStatus(task: Task, checked: boolean) {
    this.deleteTask(task);

    task.checked = checked;
    this.db
      .list('tasks')
      .push(task)
      .then(() => {})
      .catch((error) => {});
  }
}
