import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoComponent} from "./components/todo.component";
import {TodoService} from "./servises/todos.service";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [TodoComponent],
  exports:[TodoComponent],
  imports: [FormsModule, CommonModule],
  providers: [TodoService]
})
export class TodoModule { }
