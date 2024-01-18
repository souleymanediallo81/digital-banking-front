import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../services/customer.service";
import {Observable} from "rxjs";
import {Customer} from "../../../model/customer.model";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  //public customers$: Observable<Array<Customer>>| undefined;
  public customers: Array<Customer> | undefined;
  public errorMessage: String | undefined;

   searchGroup:FormGroup | undefined

  constructor(private customerServ:CustomerService, private fb:FormBuilder) {

  }


  ngOnInit(): void {

    this.searchGroup = this.fb.group({
        keyword: this.fb.control("")
    })
    //this.customers$ = this.customerServ.getCustomers();
   
    this.search();
  }

  deleteCustomer(id:number){
      let conf = confirm("Supprimer le client?");
      if(!conf) return;

      this.customerServ.deleteCustomer(id).subscribe({
        next: (data)=>{
          this.customers = this.customers?.filter(cust=>cust.id != id);
        }
      })
  }

  search(){
      let keyword = this.searchGroup?.value.keyword;
      this.customerServ.searchCustomers(keyword).subscribe({
        next:(data)=>{
          this.customers = data;
        },

        error: (err)=>{
          console.log(err);
          this.errorMessage = err.message;
        }
      })
  }



}
