import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoService } from '../../services/todos.service';
import { TodoItem } from '../../models/todo-item'

@Component({
  selector: 'ukit-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  public show: boolean = false;
  public description!: string;

  constructor(public todoService: TodoService) {
  }

  toggleInput(): void {
    this.show = !this.show;
  }

  addTodo(): void {
    const todo: TodoItem = {
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

  checkTodo(id: number): void {
    this.todoService.onToggle(id);
  }

  removeTodo(id: number): void {
    this.todoService.removeTodo(id);
  }
}
