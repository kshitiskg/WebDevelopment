import { Component } from '@angular/core';
import { UsersService } from '../../../../Services/user/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  providers:[UsersService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  data:any[]=[];

  constructor(private userSrv:UsersService){
    this.getAllPost();
  }


  getAllPost(){
    this.userSrv.getAllPostData().subscribe((response:any)=>{
    this.data=response;
    })
  }
}
