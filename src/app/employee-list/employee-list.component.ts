import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  
  employees!: Employee[];

  ngOnInit(): void {
    this.employees = [
      {
        id: 0,
        firstName: 'geetesh',
        lastName: 'dubey',
        emailId: 'gtsh321@gmail.com'
      },
      {
        id: 0,
        firstName: 'geet',
        lastName: 'dubey',
        emailId: 'gt321@gmail.com'
      }

    ];
  }

  

}
