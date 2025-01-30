import { Routes } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BaiscComponent } from './baisc/baisc.component';
import { StudentComponent } from './Components/student/student.component';
import { AtrributeComponent } from './Components/Directive/atrribute/atrribute.component';
import { StructuralComponent } from './Components/Directive/structural/structural.component';
import { PipeComponent } from './Components/Pipe/pipe/pipe.component';
import { TodolistComponent } from './Projects/todolist/todolist.component';
import { TemplateDrivenFormComponent } from './Components/Forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './Components/Forms/reactive-form/reactive-form.component';

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
           },
           {
            path:'templatedrivenform',
            component:TemplateDrivenFormComponent
           },
           {
            path:'reactiveform',
            component:ReactiveFormComponent
           },
           {
               path:'leazy',
               loadChildren:() => import('./Components/leazyLoading/leazy/leazy.module').then((m)=> m.LeazyModule)
           },
           {
            path:'demo',
            loadChildren:()=> import('./Components/demo/demo.module').then(a=> a.DemoModule)
           }

        ]
    }
];
