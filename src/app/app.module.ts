import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListComponent } from './components/customers/list/list.component';
import { AddComponent } from './components/customers/add/add.component';
import { HomeComponent } from './components/accounts/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListComponent,
    AddComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    // {
    //  // provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
