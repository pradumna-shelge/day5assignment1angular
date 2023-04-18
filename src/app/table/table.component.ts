import { Component, Input } from '@angular/core';
import { validation } from 'src/validation';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
@Input() array1 =[{}as validation]


}
