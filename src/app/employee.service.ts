import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private baseURL = "http://localhost:8079/api/v1/employees";

  private baseURLForAdd = "http://localhost:8079/api/v1/createemployees";
  
  constructor(private httpClient : HttpClient) { }
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);  // Corrected line
  }

  createEmployee(employee :Employee):Observable<object>{
    return this.httpClient.post(`${this.baseURLForAdd}`, employee);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`); 
  }
}
