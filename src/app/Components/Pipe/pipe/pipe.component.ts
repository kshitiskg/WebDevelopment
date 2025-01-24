import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../custom/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule,NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  text:string='Example of pipe';

  currentDate:Date=new Date();

  username:string ='';
  userEmail:any = null;
}
