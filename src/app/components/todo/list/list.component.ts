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

  getTodos = (): TodoList[] => {
  
    let todoList = JSON.parse(localStorage.getItem('todos'));
    return todoList == null ? [] : todoList;
  }

  addTodo = (text: string): void => {

    let todo = new TodoList(this.nextId, text);
    let todos = this.getTodos();
    todos.push(todo);
    
    this.setLocalStorageTodos(todos);
    this.todoLists = todos;
    this.todoText = null;
    this.nextId++;

  }

  removeTodo = (id: number): void => {
  
    let todos = this.getTodos();
    todos = todos.filter(todo => todo.id != id);
    this.setLocalStorageTodos(todos);
    this.todoLists = todos;

  }

  setLocalStorageTodos = (todos: TodoList[]): void => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  editTodo = (todo: TodoList[]) => {
    localStorage.setItem('edittodo', JSON.stringify(todo));
    this.router.navigate(['todolist','edit']);
  }
}
