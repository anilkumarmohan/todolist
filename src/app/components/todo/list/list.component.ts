import { Component, OnInit } from '@angular/core';
import { TodoList } from '../../../config/model/todo';
import { Router } from '@angular/router';

/*
---------------   List --------------
@description: List todo items
*/

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  nextId: number;
  todoText: string;
  todoLists: TodoList[];

  /*
   * Fetching existing todo list if any and setting next index to be inserted
   * @constructor
   * @param: router - angular router component.
   */
  constructor(private router: Router) {
    const todos = this.getTodos();
    if (todos.length === 0) {
      this.nextId = 0;
    } else {
      const lastNumber = todos[todos.length - 1].id;
      this.nextId = lastNumber + 1;

    }
    this.todoLists = todos;
  }
  /*
  * @function: getTodos
  * @description: method to fetch todolist form localStoarge
  * @param: none
  * @return : todoList - array of todo data
  */
  getTodos = (): TodoList[] => {
    const todoList = JSON.parse(localStorage.getItem('todos'));
    return todoList == null ? [] : todoList;
  }
  /*
  * @function: addTodo
  * @description: method to add new todo list to localStorage
  * @param: text - new todo list to be added
  * @return : none
  */
  addTodo = (text: string): void => {
    this.router.navigate(['todolist', 'add']);
  }
  /*
  * @function: removeTodo
  * @description: method for removing exsting todo from localStorage
  * @param: id - id of the list to be removed from list
  * @return : none
  */
  removeTodo = (id: number): void => {
    let todos = this.getTodos();
    todos = todos.filter(todo => todo.id !== id);
    this.setLocalStorageTodos(todos);
    this.todoLists = todos;

  }
  /*
  * @function: setLocalStorageTodos
  * @description: common method only for setting item to localStorage
  * @param: todos - todo list object to be added to the list
  * @return : none
  */
  setLocalStorageTodos = (todos: TodoList[]): void => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  /*
  * @function: editTodo
  * @description: this method will execute while clicking on edit button
  * @param: todos - todo list object to be updated
  * @return : none
  */
  editTodo = (todo: TodoList[]) => {
    localStorage.setItem('edittodo', JSON.stringify(todo));
    this.router.navigate(['todolist', 'edit']);
  }
}
