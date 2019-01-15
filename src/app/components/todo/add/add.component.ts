import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addItem = () =>{
    let todo = new TodoList(this.nextId, text);
    let todos = this.getTodos();
    todos.push(todo);
    
    this.setLocalStorageTodos(todos);
    this.todoLists = todos;
    this.todoText = null;
    this.nextId++;
  }
}
