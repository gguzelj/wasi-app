import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExcelTableComponent} from './excel-table/excel-table.component';
import {ExcelFilterComponent} from './excel-filter/excel-filter.component';
import {ExcelComponent} from './excel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExcelComponent,
    ExcelTableComponent,
    ExcelFilterComponent,
  ],
})
export class ExcelModule { }
