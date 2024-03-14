import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task.model';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  taskMessage = '';
  showErrorMessage = false;
  constructor(private db: AngularFireDatabase) {}

  private tasks: Task[] = [];

  @Output() taskAdded = new EventEmitter<Task>();

  onAddTask(taskForm: NgForm) {
    if (taskForm.invalid) {
      return;
    }

    const newTask: Task = {
      info: this.taskMessage,
      checked: false,
    };
    this.db.list('tasks').push(newTask);
    this.taskMessage = '';
    taskForm.resetForm();
  }

  get taskMessageElement(): NgModel {
    return {} as NgModel;
  }

  getTasks() {
    return this.tasks.slice();
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
