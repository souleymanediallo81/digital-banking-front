import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetail } from '../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private host = "http://localhost:8082/accounts";

  constructor(private http: HttpClient) { }

  getAccount(accountId:string, currentPage:number, pageSize: number ):Observable<AccountDetail>{
      return this.http.get<AccountDetail>(`${this.host}/${accountId}/pageOperations?page=${currentPage}&size=${pageSize}`)
  }

  credit(accountId:string, amount:number, description:string){
    let data = {
      accountId,
      amount,
      description}
    return this.http.post(`${this.host}/credit`, data);
  }


  debit(accountId:string, amount:number, description:string){
    let data = {
      accountId,
      amount,
      description}
    return this.http.post(`${this.host}/debit`, data);
  }

  transfert(accountId:string, accountDest:string, amount:number){
    let data = {
      accountId,
      accountDest,
      amount}
    return this.http.post(`${this.host}/transfert`, data);
  }

}
