import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  // FormControl - represents a single form of elements's value and validatation status
   // eg - input text field
  // FormGroup - represents a group of formcontrols.
  // eg - a form with name , password , email 

  userForm:FormGroup;
  isDisplay:boolean=false;

  constructor(){
    this.userForm = new FormGroup({
      name:new FormControl('', [Validators.required, Validators.minLength(3)]),
      password:new FormControl('' ,[Validators.required]),
      email:new FormControl('',[Validators.required])
    })
  }

  onSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.isDisplay=true;
    }else{
      console.error("Form is not valid");
    }
  }
}
