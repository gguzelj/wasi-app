import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {

  mockExcel: any;

  constructor() {
  }

  ngOnInit() {
    this.mockExcel = [
      {
        name: 'SAR001241',
        ip: '10.223.240.241',
        SO: 'Windows Server R2 Standard',
        servicePack: 'Service Pack 1',
        type: 'SAR',
        office: 'EspacioMapfre',
        user: 't_ljunior,adm-prsouza,server_adm2',
        userName: 'Emiliano Scaramuccia - Server Admin',
        lastConnection: '11/21/2018 7:10:47 PM',
        phone: '1550123312'
      },
      {
        name: 'SAR001241',
        ip: '10.223.240.241',
        SO: 'Windows Server R2 Standard',
        servicePack: 'Service Pack 1',
        type: 'SAR',
        office: 'EspacioMapfre',
        user: 't_ljunior,adm-prsouza,server_adm2',
        userName: 'Lidia Alicia Gimenez',
        lastConnection: '11/21/2018 7:10:47 PM',
        phone: '1550123312'
      },
      {
        name: 'SAR001241',
        ip: '10.223.240.241',
        SO: 'Windows Server R2 Standard',
        servicePack: 'Service Pack 1',
        type: 'SAR',
        office: 'EspacioMapfre',
        user: 't_ljunior,adm-prsouza,server_adm2',
        userName: 'Liliana Gomez',
        lastConnection: '11/21/2018 7:10:47 PM',
        phone: '1234412.1-12333'
      }
    ];
  }


}
