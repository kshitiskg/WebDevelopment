import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomDirective } from '../custom.directive';

@Component({
  selector: 'app-atrribute',
  standalone: true,
  imports: [CommonModule,CustomDirective],
  templateUrl: './atrribute.component.html',
  styleUrl: './atrribute.component.css'
})
export class AtrributeComponent {
   isActive:boolean=false;

   hightlight(){
    this.isActive=true;
   }
}
