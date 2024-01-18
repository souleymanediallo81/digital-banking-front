import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./components/customers/list/list.component";
import { AddComponent } from './components/customers/add/add.component';
import { HomeComponent } from './components/accounts/home/home.component';



const routes: Routes = [
{
  path:"customers" , component:ListComponent,
  
},
{
  path:"customers/add", component:AddComponent,
},
{
  path:"accounts" , component:HomeComponent,
  
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
