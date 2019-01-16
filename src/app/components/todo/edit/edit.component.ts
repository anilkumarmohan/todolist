import { Component, OnInit } from '@angular/core';
import { EditItem } from '../../../config/model/todo';
import { Router } from '@angular/router';
/*
---------------   Edit --------------
@description: Edit todo items
*/
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent {

  editItem: EditItem;
  /*
  * fetching todo list from localStorage
  * @constructor
  * @param: router - angular router component.
  */
  constructor(private router: Router) {
    this.editItem = <EditItem>JSON.parse(localStorage.getItem('edittodo'));
  }
  /*
  * @function: updateItem
  * @description: method to update todo, store to localStorage and navigate back to todolist page
  * @param: none
  * @return : none
  */
  updateItem = () => {
    const todoList = <EditItem[]>JSON.parse(localStorage.getItem('todos'));
    const editTodo = <EditItem>todoList.find(p => p.id === this.editItem.id);
    editTodo.name = this.editItem.name;
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
