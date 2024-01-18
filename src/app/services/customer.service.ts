import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private host = "http://localhost:8082/customers"
  constructor(private http:HttpClient) { }

  getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.host);
  }

  searchCustomers(keyword:string):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(`${this.host}/search?keyword=${keyword}`);
  }

  addCustomer(customer:any): Observable<Customer>{
    return this.http.post<Customer>(this.host, customer);
  }

  deleteCustomer(id:number):Observable<Customer>{
    return this.http.delete<Customer>(`${this.host}/${id}`);
  }
}
