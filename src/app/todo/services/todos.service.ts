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
    // let todosStorage = this.getTodos();
    // // if no todos, nextId is 0,
    // // otherwise set to 1 more than last todo id
    // if (todos.length == 0) {
    //   this.nextId = 0;
    // } else {
    //   let maxId = todos[todos.length-1].id;
    //   this.nextId = maxId + 1;
    // }
  }

  public tasks: number = this.todolist.length;
  private checkedArr = this.todolist.filter((i) => i.flag);
  public checkedTasks: number = this.checkedArr.length;

  // TODO доработать работу с localStorage

  setTodos(todolist: ToDo[]) {
    localStorage.setItem('todoList', JSON.stringify(todolist));
  }

  public getTodos(): ToDo[] {
    let localStorageItem = localStorage.getItem('todolist');
    return localStorageItem == null ? [] : JSON.parse(localStorageItem);
  }

  public pushTodo(todo: ToDo) {
    this.todolist.push(todo);
    localStorage.setItem('todoList', JSON.stringify(this.todolist));
    // console.log(this.todolist.length);
    this.tasks = this.todolist.length;
    console.log(this.getTodos());
  }

  public onToggle(id: number): void {
    const checkIndx = this.todolist.findIndex((t) => t.id === id);
    this.todolist[checkIndx].flag = !this.todolist[checkIndx].flag;
    console.log(this.checkedTasks);
    this.todolist[checkIndx].flag ? this.checkedTasks++ : this.checkedTasks--;
  }

  public removeTodo(id: number) {
    this.todolist = this.todolist.filter((t) => t.id !== id);
    // if (condition) {
    // }
    // TODO  сделать изменение счетчика при удалении элемента
    // console.log(this.todolist.length);
    this.tasks = this.todolist.length;
  }
}
