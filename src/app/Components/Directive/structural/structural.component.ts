import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css'
})
export class StructuralComponent {
   
     showMessage:boolean=false;
     divHideShow:boolean=true;
     toggleDiv:boolean=true;

     languages:any[]=['Angular','html','css','bootstrap','javascript'];

     show(){
       this.showMessage=true;
     }

     showDiv(){
       this.divHideShow=true;
     }

     hideDiv(){
      this.divHideShow=false;
     }

     hideShow(){
       this.toggleDiv= !this.toggleDiv
     }
}
