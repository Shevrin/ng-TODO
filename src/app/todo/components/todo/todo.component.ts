import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoService, ToDo } from '../../services/todos.service';

@Component({
  selector: 'ukit-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  tasks: number;
  show: boolean = false;
  description!: string;

  constructor(public todoService: TodoService) {
    this.tasks = this.todoService.tasks;
  }

  addInput() {
    this.show = !this.show;
  }

  addTodo() {
    const todo: ToDo = {
      description: this.description,
      flag: false,
      id: Date.now(),
      // id: this.todoService.nextId + 1,
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
}
