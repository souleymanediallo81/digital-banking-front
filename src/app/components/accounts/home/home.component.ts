import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AccountDetail } from 'src/app/model/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  accountIdFormGroup: FormGroup | undefined
  operationFormGroup: FormGroup | undefined
  accountDetail!:AccountDetail
  currentPage: number = 0;
  pageSize: number = 5;
  accountId!: string;
  constructor(private fb: FormBuilder, private accountServ:AccountService){}

  ngOnInit(): void {
    
      this.accountIdFormGroup = this.fb.group({
          accountId: this.fb.control("", [Validators.required])
      })

      this.operationFormGroup = this.fb.group({
          operationType: this.fb.control('CREDIT'),
          amount: this.fb.control(0),
          accountDestination: this.fb.control(null),
          description: this.fb.control(""),
      })

      

  }

  saveOperation(){
    let operationType = this.operationFormGroup?.value.operationType;
    let amount = this.operationFormGroup?.value.amount;
    let accountDest = this.operationFormGroup?.value.accountDestination;
    let description = this.operationFormGroup?.value.description;

    if(operationType=='CREDIT'){
      this.accountServ.credit(this.accountId, amount, description).subscribe({
        next: (data)=>{
          alert("Operation Credit effectuer avec succees");
            this.search();
        },
        error:(err)=>{
            console.log(err.message);
        }
      });
    }else if(operationType=='DEBIT'){
      this.accountServ.debit(this.accountId, amount, description).subscribe({
        next: (data)=>{
          alert("Operation Debit effectuer avec succees");
            this.search();
        },
        error:(err)=>{
            console.log(err.message);
        }
      });
    }else{
      this.accountServ.transfert(this.accountId, accountDest, amount).subscribe({
        next: (data)=>{
          alert("Operation Transfert effectuer avec succees");
         
            this.search();
        },
        error:(err)=>{
          console.log("id dest ",accountDest)
            console.log(err.message);
        }
      });
    }
  }

  search(){
    this.accountId = this.accountIdFormGroup?.value.accountId
     this.accountServ.getAccount(this.accountId,this.currentPage, this.pageSize).subscribe({
        next:(data)=>{
            this.accountDetail = data;
            // console.log("=========data:",data['accountOperationDtos'])
            // console.log("acount detail", this.accountDetail['accountOperationDtos'])
        }
     });
      //console.log(this.accountDetail$);
  }

  nextPage(page: number){
      this.currentPage= page;
      this.search()
  }

}
