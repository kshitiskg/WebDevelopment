import { Component } from '@angular/core';
import { UsersService } from '../../Services/user/users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule,FormsModule],
  providers:[UsersService],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  
     userObj:any={
      userId: 0,
      name: "",
      email:"",
      userName: "",
      password: "",
      contactNo: "",
      city: "",
      address: "",
      role: ""
    }
     
    usersList:any[]=[];

    constructor(private userSrv:UsersService){
       this.getAll();
    }


    getAll(){
    this.userSrv.getAllUsers().subscribe((result:any)=>{
      if(result.result){
        this.usersList=result.data;
        // console.log(this.usersList);
      }else{
        alert("List not Loaded ... Something went worng");
      }
    })
    }

    onCreateUser(){
      this.userSrv.createNewUser(this.userObj).subscribe((res:any)=>{
       if(res.result){
        alert("User Created Successful");
        this.getAll();
       }else{
        alert("Not Created User try again")
       }
      })
    }

    onEdit(id:number){
     this.userSrv.getUserById(id).subscribe((res:any)=>{
      this.userObj=res.data;
      console.log(this.userObj);
     })
    }

    onUserUpdate(){
      this.userSrv.updateUser(this.userObj).subscribe((res:any)=>{
        if(res.result){
          alert("User Updated Successful");
          this.getAll();
         }else{
          alert("Not Updated User try again")
         }  
      })
    }

    onDelete(id:number){
    this.userSrv.deleteById(id).subscribe((res:any)=>{
      if(res.result){
        alert("Deleted Record");
        this.getAll();
      }else{
        alert("Something wrong try again")
      }
    })
    }
}
