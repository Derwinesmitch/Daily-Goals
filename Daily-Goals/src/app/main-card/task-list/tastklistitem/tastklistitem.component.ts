import { Component, Input } from '@angular/core';
import { Task } from '../../task.model';
@Component({
  selector: 'app-tasklistitem',
  standalone: true,
  imports: [],
  templateUrl: './tastklistitem.component.html',
  styleUrl: './tastklistitem.component.css',
})
export class TasklistitemComponent {
  @Input() task!: Task;

  constructor() {}
  ngOnInit(): void {
    console.log('Task:', this.task);
  }
}
