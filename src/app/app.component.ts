import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BaiscComponent } from './baisc/baisc.component';
import { TestingComponent } from './testing/testing.component';
import { TodolistComponent } from './Projects/todolist/todolist.component';
import { StructuralComponent } from './Components/Directive/structural/structural.component';
import { AtrributeComponent } from './Components/Directive/atrribute/atrribute.component';
import { PipeComponent } from './Components/Pipe/pipe/pipe.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  title = 'webdevelopment';
}
