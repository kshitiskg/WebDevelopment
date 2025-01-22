import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BaiscComponent } from './baisc/baisc.component';
import { TestingComponent } from './testing/testing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BaiscComponent,TestingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  title = 'webdevelopment';
}
