import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { TodoService, ToDo } from '../../services/todos.service';

@Component({
  selector: 'ukit-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements DoCheck {
  tasks: number;
  show: boolean = false;
  description!: string;
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
      description: this.description,
      flag: false,
      id: Date.now(),
    };
    if (todo.description.trim()) {
      this.todoService.pushTodo(todo);
    }
    this.description = '';
  }

  checkTodo(id: number) {
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
