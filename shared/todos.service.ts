import { Injectable } from '@angular/core';

export interface ToDo {
  id: number;
  flag: boolean;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public storage: ToDo[] = [
    {
      id: 1,
      flag: !false,
      title: 'learn NG Component',
    },
    {
      id: 2,
      flag: false,
      title: 'buy a hat',
    },
    {
      id: 3,
      flag: !false,
      title: 'fill a car',
    },
    {
      id: 4,
      flag: false,
      title: 'select a phone',
    },
    {
      id: 5,
      flag: false,
      title: 'do smth else',
    },
  ];

  public tasks: number = this.storage.length;
  private checckedArr = this.storage.filter((i) => i.flag);
  public checkedTasks: number = this.checckedArr.length;

  // TODO доработать работу с localStorage

  // setTodos(storage: ToDo[]) {
  //   localStorage.setItem('todoList', JSON.stringify(storage));
  // }

  // getTodos(): ToDo[] {
  //   let todoLocalStorage = JSON.parse(localStorage.getItem('todoList'));
  //   return (todoLocalStorage = null ? [] : todoLocalStorage.todoList);
  // }

  pushTodo(todo: ToDo) {
    this.storage.push(todo);
    localStorage.setItem('todoList', JSON.stringify(this.storage));
    // console.log(this.storage.length);
    this.tasks = this.storage.length;
  }

  onToggle(id: number): void {
    const checkIndx = this.storage.findIndex((t) => t.id === id);
    this.storage[checkIndx].flag = !this.storage[checkIndx].flag;
    console.log(this.checkedTasks);
    this.storage[checkIndx].flag ? this.checkedTasks++ : this.checkedTasks--;
  }

  removeTodo(id: number) {
    this.storage = this.storage.filter((t) => t.id !== id);
    // TODO  сделать изменение счетчика при удалении элемента
    // console.log(this.storage.length);
    this.tasks = this.storage.length;
  }
}
