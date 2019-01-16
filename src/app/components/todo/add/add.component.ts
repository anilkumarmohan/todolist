import { Component, OnInit } from '@angular/core';
import { EditItem } from '../../../config/model/todo';
import { Router } from '@angular/router';
/*
---------------   Add --------------
@description: Add new todo item
*/
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  todotext: string;
  /*
  * adding todo list to array
  * @constructor
  * @param: router - angular router component.
  */
  constructor(private router: Router) { }
  /*
  * @function: addItem
  * @description: method to add new todo item, store to localStorage and navigate back to todolist page
  * @param: none
  * @return : none
  */
  addItem = (): void => {
    const todoList = <EditItem[]>JSON.parse(localStorage.getItem('todos'));
    const lastItem = todoList[todoList.length - 1];
    todoList.push({ 'id': (Number(lastItem ? lastItem.id : 0) + 1), 'name': this.todotext });
    localStorage.setItem('todos', JSON.stringify(todoList));
    this.router.navigate(['todolist']);
  }
  /*
  * @function: cancelItem
  * @description: method to navigate back to todolist page
  * @param: none
  * @return : none
  */
  cancelItem = () => {
    this.router.navigate(['todolist']);
  }
}
