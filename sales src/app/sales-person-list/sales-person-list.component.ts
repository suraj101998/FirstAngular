import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  constructor() { }
    salesPersonList:SalesPerson[]=[
      new SalesPerson("Sreeja","Sravanam","sreeja@gmail.com",5000),
      new SalesPerson("Raghu","Nandan","raghu@gmail.com",2500),
      new SalesPerson("Jyothi","Kumar","jyothi@gmail.com",5000),
      new SalesPerson("Vinutha","Kola","vinutha@gmail.com",1500)
    ]
  ngOnInit(): void {
  }
  salesPersonModel: SalesPerson = new SalesPerson("vinod","kamble","vinod@gmail.com",25000);
  onSubmit(){
    console.log(this.salesPersonModel);
  }

}
