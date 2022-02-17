import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  name = 'TodoList App';

  constructor (
    private router: Router,
    public flashMessageService: FlashMessagesService ) { }

  ngOnInit() {
  }
  id;
 todos =[
    {
      id:1,
      title: 'Sample Task 1',
      message: 'Users 1',
      date: '01/20/2022'
    },

    {
      id:2,
      title: 'Sample Task 2',
      message: 'User 2',
      date: '20/03/2022'
    },

    {
      id:3,
      title: 'Sample Task 3',
      message: 'User 3',
      date: '20/05/2022'
    }
  ];
  model2:any={};
  msg:any="";
  myValue;
  form:any={};
  // addTodo(newTodoTitle,newTodoDate1,newTodoMessage1){
  //   var newTodo = {
  //     title: newTodoTitle,
  //     date: newTodoDate1,
  //     message: newTodoMessage1
  //   };
  //   this.todos.push(newTodo);
  //   this.flashMessageService.show('Data inserted',{cssClass: 'alert-info',timeout:3000 });
  //   this.router.navigate(['createtodo']);
  // }

 
  deleteTodo ( i ) {
    if ( confirm ( 'you want do delete?' ) )
    this.todos = this.todos.filter(t => t.id !== i.id);
    this.flashMessageService.show('Data Deleted',{cssClass: 'alert-info',timeout:3000 });
    this.router.navigate(['createtodo']);
  }

  submitForm ( form: any ) : void {
    if ( form.title!=='' && form.date!=='' && form.message!=='' )
    {
      this.todos.push(form);
      this.flashMessageService.show('Data inserted',{cssClass: 'alert-info',timeout:3000 });
      this.router.navigate(['createtodo']);
      // console.log('Form Data: ');
      // console.log(form);
    } else {
      this.flashMessageService.show('Fill the fields',{cssClass: 'alert-danger',timeout:3000 });
    } 
  }
   editTodo(k){
    this.form.title = this.todos[k].title;
    this.form.date = this.todos[k].date;
    this.form.message = this.todos[k].message;
    this.myValue = k;
  }
  updateTodo(){
    let k= this.myValue;
    for(let i=0; i<this.todos.length;i++){
      if(i==k){
        this.todos[i]= this.model2;
        this.model2 = {};
        this.msg = "Record is successfully updated..... ";
      }

    }

}
}
