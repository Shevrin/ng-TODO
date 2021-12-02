import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { TodoService, ToDo } from 'src/app/todo/todo/servises/todos.service';

@Component({
  selector: 'ukit-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements DoCheck {
  title: string = '';
  tasks: number;
  // = this.todoService.tasks;
  show: boolean = false;
  checkedTasks: number;
  constructor(public todoService: TodoService) {
    this.tasks = this.todoService.tasks;
    this.checkedTasks = this.todoService.checkedTasks;
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

  ngDoCheck() {
    this.tasks = this.todoService.tasks;
    this.checkedTasks = this.todoService.checkedTasks;
    console.log('doOnCheck');
  }
}
