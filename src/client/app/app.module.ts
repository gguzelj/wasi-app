import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExcelComponent } from './excel/excel.component';
import { ExcelTableComponent } from './excel/excel-table/excel-table.component';
import { ExcelFilterComponent } from './excel/excel-filter/excel-filter.component';
import { SearchPipe } from './search/search.pipe';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ExcelComponent,
    ExcelTableComponent,
    ExcelFilterComponent,
    SearchPipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
