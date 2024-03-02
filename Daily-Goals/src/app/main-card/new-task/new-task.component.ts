import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  taskMessage = '';
  private tasks: Task[] = [];
  @Output() taskAdded = new EventEmitter<Task>();
  onAddTask() {
    console.log('adding a new task');
    const newTask = new Task(this.taskMessage);
    this.taskAdded.emit(newTask);
    this.taskMessage = '';
  }

  getTasks() {
    return this.tasks.slice();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    // this.tasks.push(...this.tasks);
    console.log('task added', task);
  }
}
