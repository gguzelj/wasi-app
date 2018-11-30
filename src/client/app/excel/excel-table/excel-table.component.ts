import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-excel-table',
  templateUrl: './excel-table.component.html',
  styleUrls: ['./excel-table.component.scss'],
})
export class ExcelTableComponent {
  public search: any = '';

  @Input() data: any;
  @Input() loading: boolean;


  constructor() {
  }
}
