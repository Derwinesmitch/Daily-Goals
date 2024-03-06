import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../main-card/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbutton',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkbutton.component.html',
  styleUrl: './checkbutton.component.css',
})
export class CheckbuttonComponent {
  @Input() task!: Task;
  @Output() checkChanged = new EventEmitter<boolean>();
  checked: boolean = false;

  ngOnInit() {
    this.checked = this.task.checked;
  }

  onCheckChange() {
    this.checkChanged.emit(this.checked);
  }
}
