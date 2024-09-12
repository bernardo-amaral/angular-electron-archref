import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  selector: 'app-main-screen',
  templateUrl: 'main-screen.component.html',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class MainScreenComponent {}
