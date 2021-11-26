import { Component, OnInit } from '@angular/core';
import { TodoService, ToDo } from 'shared/todos.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  title: string = '';

  constructor(public todoService: TodoService) {}

  addTodo() {
    const todo: ToDo = {
      title: this.title,
      flag: false,
      id: Date.now(),
    };

    if (todo.title) {
      this.todoService.pushTodo(todo);
      console.log(todo);
    }
    this.title = '';
  }

  ngOnInit(): void {}
}
