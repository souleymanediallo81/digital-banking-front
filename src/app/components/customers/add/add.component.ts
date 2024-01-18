import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  customerFormGroup: FormGroup | undefined;

  constructor(private customerServ:CustomerService, private fb:FormBuilder){}
  ngOnInit(): void {
    
    this.customerFormGroup = this.fb.group({
      name: this.fb.control("", [Validators.required, Validators.minLength(4)]),
      email: this.fb.control("", [Validators.required, Validators.email])
    })
  }


  save(){
    let customer= {
      name:this.customerFormGroup?.value.name,
      email:this.customerFormGroup?.value.email,
    }
    this.customerServ.addCustomer(customer).subscribe({
      next:(data)=>{
        alert("Ajout client effectuer avec succees !");
        this.customerFormGroup?.reset();
      },

      error: (err)=>{
        console.log(err);
      }

    })
  }

}
