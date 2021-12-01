import { Component, OnInit } from '@angular/core';
import { TodoService, ToDo } from 'shared/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  title: string = '';
  tasks: number = this.todoService.tasks;
  show: boolean = false;

  constructor(public todoService: TodoService) {
    this.tasks = this.todoService.tasks;
  }

  addInput() {
    this.show = !this.show;
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
    // console.log(this.tasks);
  }

  checkTodo(id: number) {
    // console.dir(id);
    this.todoService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }

  ngOnInit() {}
}
