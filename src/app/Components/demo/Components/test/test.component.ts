import { Component } from '@angular/core';
import { ResusableTableComponent } from '../../../../Shared/resusable-table/resusable-table.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ResusableTableComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
   
  tableColums:any[]=['Name' , 'Contact', 'email'];
  tableData:any[]=[{Name:'abc',Contact:34556,email:'k@gmail.com'},
    {Name:'abc',Contact:34556,email:'k@gmail.com'},{Name:'abc',Contact:34556,email:'k@gmail.com'}
  ]

  editRecord(record:any){

  }

  deleteRecord(record:any){

  }

}
