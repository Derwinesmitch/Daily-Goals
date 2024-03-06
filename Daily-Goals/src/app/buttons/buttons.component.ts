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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [NgClass, CommonModule, FormsModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent implements AfterViewInit {
  dropdownPopoverShow = false;
  editMode = false;
  editedTaskInfo: string = '';
  @ViewChild('btnDropdownRef', { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild('popoverDropdownRef', { static: false })
  popoverDropdownRef!: ElementRef;
  @Output()
  deleteClicked = new EventEmitter<void>();
  @Output()
  editClicked = new EventEmitter<string>();

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

  enterEditMode() {
    this.editMode = true;
    this.editedTaskInfo = '';
  }

  saveTask() {
    this.editMode = false;
    this.editClicked.emit(this.editedTaskInfo);
  }
}
