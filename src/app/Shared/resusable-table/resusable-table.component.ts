import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resusable-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resusable-table.component.html',
  styleUrl: './resusable-table.component.css'
})
export class ResusableTableComponent {

  @Input() colums:any[]=[];
  @Input() data:any[]=[];

  @Output() onEdit= new EventEmitter<any>();
  @Output() onDelete=  new EventEmitter<any>();

  Edit(data:any){
    this.onEdit.emit(data);
  }

  Delete(data:any){
   this.onDelete.emit(data);
  }
}
