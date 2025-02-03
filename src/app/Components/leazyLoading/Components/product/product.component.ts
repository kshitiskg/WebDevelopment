import { Component } from '@angular/core';
import { UsersService } from '../../../../Services/user/users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  providers:[UsersService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  data:any[]=[];
  postsObj:any={
    userId: 0,
    id: 0,
    title: "",
    body: ""
  }

  constructor(private userSrv:UsersService){
    this.getAllPost();
  }


  getAllPost(){
    this.userSrv.getAllPostData().subscribe((response:any)=>{
    this.data=response;
    })
  }

  onSave(){
     this.userSrv.createPosts(this.postsObj).subscribe((response:any)=>{
      console.log(response);
      alert("Form Successfully Sumbitted")
     })
  }
  onClear(){
    this.postsObj={
      userId: 0,
      id: 0,
      title: "",
      body: ""
    }
  }

  onEdit(record:any){
    this.postsObj=record;
  }

  onUpdate(){
    this.userSrv.updatePosts(this.postsObj).subscribe((result:any)=>{
      console.log(result);
      alert("Updated successfull");
      this.onClear();
    })
  }

  onDelete(id:number){
    this.userSrv.deleteRecord(id).subscribe((record:any)=>{
      console.log(record);
      alert("Record deleted Successfull")
    })
  }
}
