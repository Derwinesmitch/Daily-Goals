import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { createPopper } from '@popperjs/core';
import { NgClass } from '@angular/common';
import { Task } from '../main-card/task.model';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [NgClass],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent implements AfterViewInit {
  dropdownPopoverShow = false;
  editMode = false;
  @ViewChild('btnDropdownRef', { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild('popoverDropdownRef', { static: false })
  popoverDropdownRef!: ElementRef;
  @Output()
  deleteClicked = new EventEmitter<void>();
  editClicked = new EventEmitter<void>();

  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: 'bottom-start',
      }
    );
  }
  toggleDropdown(event: any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  deleteTask() {
    this.deleteClicked.emit();
  }

  editTask() {
    this.editClicked.emit();
    this.editMode = true;
  }

  saveTask(task: Task) {
    this.editMode = false;
  }
}
