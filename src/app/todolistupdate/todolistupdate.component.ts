import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { TodolistComponent } from '../todolist/todolist.component';

@Component({
  selector: 'app-todolistupdate',
  templateUrl: './todolistupdate.component.html',
  styleUrls: ['./todolistupdate.component.css']
})
export class TodolistupdateComponent implements OnInit {
  
  private headers = new Headers({ 'Content-Type': 'application/json'});
  constructor(private router: Router, private route: ActivatedRoute, private http: Http)  { }
  todos;
  //todo;
  ngOnInit() {
  }

  // updateTodo(todo) {  
  //   this.todos = todo.id;  
  //   this.todos = todo.title;  
  //   this.todos = todo.date; 
  //   this.todos = todo.message;
  // }    
}