import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  
  newText:string='';
  task:any[]=[];

  addTask(){
     this.task.push(this.newText);
     this.newText='';
  }

  removeTask(index:number){
      this.task.splice(index,1);
  }

  removeAllTask(){
      this.task=[];
  }

}
