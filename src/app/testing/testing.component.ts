import { Component } from '@angular/core';
import { StudentComponent } from '../Components/student/student.component';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [StudentComponent],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {

}
