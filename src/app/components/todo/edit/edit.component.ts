import { Component, OnInit } from '@angular/core';
import { EditItem } from '../../../config/model/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {

  editItem : EditItem;

  constructor(private router: Router) {
    // fetching todo list from localStorage
    this.editItem  = <EditItem>JSON.parse(localStorage.getItem("edittodo"));
  } 

  ngOnInit() {
  }
  // method to update todo, store to localStorage and navigate back to todolist page
  updateItem = () => {

    let todoList = <EditItem[]> JSON.parse(localStorage.getItem("todos"));
    let editTodo =  <EditItem> todoList.find(p=> p.id == this.editItem.id);
    editTodo.name = this.editItem.name;
    localStorage.setItem("todos", JSON.stringify(todoList));
    this.router.navigate(["todolist"]);

  }
  cancelItem = () =>{
    this.router.navigate(["todolist"]);

  }
}
