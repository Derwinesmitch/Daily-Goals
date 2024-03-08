import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  taskMessage = '';
  constructor(private db: AngularFireDatabase) {}

  private tasks: Task[] = [];

  @Output() taskAdded = new EventEmitter<Task>();
  onAddTask() {
    const newTaskId = uuidv4();
    const newTask: Task = {
      id: newTaskId,
      info: this.taskMessage,
      checked: false,
    };
    this.db.list('tasks').push(newTask);
    this.taskMessage = '';
  }

  getTasks() {
    return this.tasks.slice();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    console.log('task added', task);
  }
}
