import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './components/todo/todo.component';
import { TodoService } from './services/todos.service';

@NgModule({
  declarations: [TodoComponent],
  exports: [TodoComponent],
  imports: [FormsModule, CommonModule],
  providers: [TodoService],
})
export class TodoModule {}
