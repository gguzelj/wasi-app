import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExcelTableComponent} from './excel-table/excel-table.component';
import {ExcelComponent} from './excel.component';
import {FormsModule} from "@angular/forms";
import {SearchPipe} from "../search/search.pipe";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  declarations: [
    SearchPipe,
    ExcelComponent,
    ExcelTableComponent,
  ],
  exports : [ExcelComponent, ExcelTableComponent]
})
export class ExcelModule { }
