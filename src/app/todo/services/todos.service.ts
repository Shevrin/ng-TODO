import { Injectable } from '@angular/core';
import {TodoItem} from "../models/todo-item";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todolist: TodoItem[] = [
    {
      id: 1,
      flag: true,
      description: 'learn NG Component',
    },
    {
      id: 2,
      flag: false,
      description: 'generate NG Directive',
    },
    {
      id: 3,
      flag: true,
      description: 'create custom btn from svg',
    },
    {
      id: 4,
      flag: false,
      description: 'structure from @imports-list',
    },
    {
      id: 5,
      flag: false,
      description: 'do smth else',
    },
  ];
  public checkedArr: TodoItem[];
  // = this.todolist.filter((i) => i.flag);
  public checkedTasks: number;
  // = this.checkedArr.length;

  constructor() {

    this.todolist = TodoService.getTodos();
    this.checkedArr = this.todolist.filter((i) => i.flag);
    this.checkedTasks = this.checkedArr.length;

  }

  public pushTodo(todo: TodoItem): void {
    this.todolist.push(todo);
    this.setTodos(this.todolist);
  }

  public onToggle(id: number): void {
    const checkIndx = this.todolist.findIndex((item) => item.id === id);
    this.todolist[checkIndx].flag = !this.todolist[checkIndx].flag;
    this.todolist[checkIndx].flag ? this.checkedTasks++ : this.checkedTasks--;
    this.checkedArr = this.todolist.filter((item) => item.flag);
    this.setTodos(this.todolist);
  }

  public removeTodo(id: number): void {
    this.todolist = this.todolist.filter((item) => item.id !== id);
    this.checkedArr = this.todolist.filter((item) => item.flag);
    this.setTodos(this.todolist);
  }

  private setTodos(todolist: TodoItem[]): void {
    localStorage.setItem('todoList', JSON.stringify(todolist));
  }

  private static getTodos(): TodoItem[] {
    let localStorageItem = localStorage.getItem('todoList');
    return localStorageItem == null ? [] : JSON.parse(localStorageItem);
  }
}
