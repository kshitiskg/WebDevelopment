import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  userObj:any={
    name:'',
    email:'',
    password:''
  }

  onSubmit(form:any){
      if(form.valid){
        this.userObj=form.value;
        console.log("Form Submitted" + this.userObj);
        console.log("Form Submitted" + JSON.stringify(this.userObj) )
      }else{
        console.log("Form is invalid")
      }
  }
}
