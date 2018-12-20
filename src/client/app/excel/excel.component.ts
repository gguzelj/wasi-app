import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {

  data : any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.data = this.http.get('/inventory/api/data');
  }


}
