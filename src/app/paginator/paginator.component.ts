import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})

export class PaginatorComponent implements OnInit {
  ngOnInit(){
    
  }
  displayedColumns = ['position', 'name', 'country', 'aum'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  position: number;
  name: string;
  country: string;
  aum: number
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'BlackRock', aum: 1.0079, country: 'Germany'},
  {position: 2, name: 'UBS', aum: 4.0026, country: 'USA'},
  {position: 3, name: 'Allianz', aum: 6.941, country: 'Germany'},
  {position: 4, name: 'PIMCO', aum: 9.0122, country: 'USA'},
  {position: 5, name: 'Boron', aum: 10.811, country: 'Japan'},
];
