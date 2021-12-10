import { Injectable } from '@angular/core';

export interface ToDo {
  id: number;
  flag: boolean;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todolist: ToDo[] = [
    {
      id: 1,
      flag: !false,
      description: 'learn NG Component',
    },
    {
      id: 2,
      flag: false,
      description: 'generate NG Directive',
    },
    {
      id: 3,
      flag: !false,
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

  constructor() {
    this.todolist = this.getTodos();

    this.checkedArr = this.todolist.filter((i) => i.flag);
    this.checkedTasks = this.checkedArr.length;
  }
  public checkedArr: any;
  // = this.todolist.filter((i) => i.flag);
  public checkedTasks: number;
  // = this.checkedArr.length;
  public tasks: number = this.todolist.length;

  private setTodos(todolist: ToDo[]) {
    localStorage.setItem('todoList', JSON.stringify(todolist));
    console.log(this.getTodos());
  }

  private getTodos(): ToDo[] {
    let localStorageItem = localStorage.getItem('todoList');
    console.log(localStorageItem);

    return localStorageItem == null ? [] : JSON.parse(localStorageItem);
  }

  public pushTodo(todo: ToDo) {
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

  public removeTodo(id: number) {
    this.todolist = this.todolist.filter((item) => item.id !== id);
    this.checkedArr = this.todolist.filter((item) => item.flag);
    this.setTodos(this.todolist);
  }
}
