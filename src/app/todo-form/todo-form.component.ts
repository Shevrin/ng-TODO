import { Component, OnInit } from '@angular/core';
import { TodoService } from 'shared/todos.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  title = 'введи заметку';
  inputValue = '';

  onInput(event: any) {
    console.log(event);
  }
  onBtn(str: string) {
    this.todoService.addTodo(str);
  }

  // addTodo() {
  //   const todo: Todo = {
  //     title: this.title,
  //     flag: false,
  //   };
  // }
  constructor(public todoService: TodoService) {}

  ngOnInit(): void {}
}
