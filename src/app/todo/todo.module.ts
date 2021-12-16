import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoService } from './services/todos.service';
import { TodoComponent } from './components/todo/todo.component';


@NgModule({
  declarations: [TodoComponent],
  exports: [TodoComponent],
  imports: [FormsModule, CommonModule],
  providers: [TodoService],
})
export class TodoModule {}
