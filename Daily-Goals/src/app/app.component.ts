import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainCardComponent } from './main-card/main-card.component';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainCardComponent, NgFor, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Daily-Goals';
}
