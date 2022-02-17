import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router' ;
import { FlashMessagesModule } from 'angular2-flash-messages';

import { HomeComponent } from './home/home.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolistupdateComponent } from './todolistupdate/todolistupdate.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "createtodo", component: TodolistComponent},
      {path: "updatetodo", component: TodolistupdateComponent}
    ])
  ],
  declarations: [ 
    AppComponent,
    TodolistComponent,
    TodolistupdateComponent,
    HomeComponent
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
