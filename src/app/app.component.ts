import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainScreenComponent } from "./screens/main/main-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'electron-app';
}
