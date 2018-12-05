import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ExcelModule} from "./excel/excel.module";
import {HeaderComponent} from "./excel/header/header.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ExcelModule,
    BrowserModule,
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
