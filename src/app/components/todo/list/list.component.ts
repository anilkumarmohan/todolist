import { Component, OnInit } from '@angular/core';
import { TodoList } from '../../../config/model/todo';
import { Router } from '@angular/router'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  nextId: number;
  todoText: string;
  todoLists: TodoList[];

  constructor(private router: Router) {
    // Fetching existing todo list if any and setting next index to be inserted
    let todos = this.getTodos();
    if (todos.length == 0) {
  
      this.nextId = 0;
    }
    else {
  
      let lastNumber = todos[todos.length - 1].id;
      this.nextId = lastNumber + 1;
  
    }
  
    this.todoLists = todos;
  }
  
  ngOnInit() {

  }
  // method to fetch todolist form localStoarge 
  getTodos = (): TodoList[] => {
  
    let todoList = JSON.parse(localStorage.getItem('todos'));
    return todoList == null ? [] : todoList;
  }
  // method to add new todo list to localStorage
  addTodo = (text: string): void => {

    // let todo = new TodoList(this.nextId, text);
    // let todos = this.getTodos();
    // todos.push(todo);
    
    // this.setLocalStorageTodos(todos);
    // this.todoLists = todos;
    // this.todoText = null;
    // this.nextId++;

    this.router.navigate(['todolist','add']);


  }
  // method for removing exsting todo from localStorage
  removeTodo = (id: number): void => {
  
    let todos = this.getTodos();
    todos = todos.filter(todo => todo.id != id);
    this.setLocalStorageTodos(todos);
    this.todoLists = todos;

  }
  // common method only for setting item to localStorage
  setLocalStorageTodos = (todos: TodoList[]): void => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  // this method will execute while clicking on edit button
  editTodo = (todo: TodoList[]) => {
    localStorage.setItem('edittodo', JSON.stringify(todo));
    this.router.navigate(['todolist','edit']);
  }
}
