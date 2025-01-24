import { Routes } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BaiscComponent } from './baisc/baisc.component';
import { StudentComponent } from './Components/student/student.component';
import { AtrributeComponent } from './Components/Directive/atrribute/atrribute.component';
import { StructuralComponent } from './Components/Directive/structural/structural.component';
import { PipeComponent } from './Components/Pipe/pipe/pipe.component';
import { TodolistComponent } from './Projects/todolist/todolist.component';

export const routes: Routes = [
    {
        path:'',
        component:NavbarComponent,
        children:[
           {
            path:'basic',
            component:BaiscComponent,
            title:'Angular Basic'
           } ,
           {
            path:'student',
            component:StudentComponent
           },
           {
            path:'attribute',
            component:AtrributeComponent
           },
           {
            path:'structural',
            component:StructuralComponent
           },
           {
            path:'pipe',
            component:PipeComponent
           },
           {
            path:'todolist',
            component:TodolistComponent
           }

        ]
    }
];
