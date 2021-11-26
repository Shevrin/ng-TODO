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
      title: 'learn React Component',
    },
    {
      id: 2,
      flag: false,
      title: 'do homework JS course',
    },
    {
      id: 3,
      flag: !false,
      title: 'fill a car',
    },
    {
      id: 4,
      flag: false,
      title: 'to meet my girl',
    },
    {
      id: 5,
      flag: false,
      title: 'do smth else',
    },
  ];

  // setTodos(storage: ToDo[]) {
  //   localStorage.setItem('todoList', JSON.stringify(storage));
  // }

  // getTodos(): ToDo[] {
  //   let todoLocalStorage = JSON.parse(localStorage.getItem('todoList'));
  //   return (todoLocalStorage = null ? [] : todoLocalStorage.todoList);
  // }

  addTodo(str: string) {
    console.log(str);
  }

  onToggle(id: number): void {
    const checkIndx = this.storage.findIndex((t) => t.id === id);
    this.storage[checkIndx].flag = !this.storage[checkIndx].flag;
  }

  removeTodo(id: number) {
    this.storage = this.storage.filter((t) => t.id !== id);
    console.log(this.storage.length);
  }
}
