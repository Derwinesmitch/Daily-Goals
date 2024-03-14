import { Component } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskheaderComponent } from './task-header/taskheader.component';
import { Task } from './task.model';
@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [NewTaskComponent, TaskListComponent, TaskheaderComponent],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css',
})
export class MainCardComponent {
  tasks: Task[] = [];

  onTaskAdded(task: Task) {
    this.tasks.push(task);
  }
}
