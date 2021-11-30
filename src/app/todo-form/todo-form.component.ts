import { Component, OnInit } from '@angular/core';
import { TodoService, ToDo } from 'shared/todos.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  title: string = '';
  tasks: number;
  show: boolean = false;

  constructor(public todoService: TodoService) {
    this.tasks = this.todoService.tasks;
  }

  addTodo() {
    const todo: ToDo = {
      title: this.title,
      flag: false,
      id: Date.now(),
    };
    if (todo.title) {
      this.todoService.pushTodo(todo);
    }
    this.title = '';

    console.log(this.tasks);
  }

  addInput() {
    this.show = !this.show;
  }

  ngOnInit(): void {}
}
