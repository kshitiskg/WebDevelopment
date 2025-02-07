import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-baisc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './baisc.component.html',
  styleUrl: './baisc.component.css',
})
export class BaiscComponent {
  // var name =''

  name: string = 'Angular - Interpolation';
  number: number = 9878678987;

  inputValue: string = 'Angular - property Binding';
  inputPlaceholder: string = 'Enter course name';

  imageURL: string =
    'data:image/jpeg;base64,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';

    imageCaption:string='angular Img';

    userName:string='';

    isChecked:boolean=false;

    // constructor(){}

    welcomeMsg(){
      alert("Welcome to Angular - Event Binding");
    }



  }
