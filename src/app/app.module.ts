import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo/components/todo.component';
import { TodoService } from 'src/app/todo/todo/servises/todos.service';
import {TodoModule} from "./todo/todo/todo.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TodoModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
