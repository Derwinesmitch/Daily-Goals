import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainCardComponent } from './main-card/main-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainCardComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Daily-Goals';
}
