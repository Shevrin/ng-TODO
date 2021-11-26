import { Component, OnInit } from '@angular/core';
import { TodoService } from 'shared/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  // flag = false;
  constructor(public todoService: TodoService) {}

  check(id: number) {
    console.dir(id);
    this.todoService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }

  ngOnInit() {}
}
