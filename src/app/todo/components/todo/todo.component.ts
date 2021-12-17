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

  public toggleInput(): void {
    this.show = !this.show;
  }

  public addTodo(): void {
    if (this.description) {
		    const todo: TodoItem = {
      description: this.description,
      flag: false,
      id: Date.now(),
      // id: this.todoService.nextId + 1,
    };
      this.todoService.pushTodo(todo);
    }
    this.description = '';
  }

  public checkTodo(id: number): void {
    this.todoService.onToggle(id);
  }

  public removeTodo(id: number): void {
    this.todoService.removeTodo(id);
  }
}
