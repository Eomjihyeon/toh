import { Component, OnInit } from '@angular/core';
import {TodoVo} from '../domain/todo.vo';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: TodoVo[];
  newTodo = new TodoVo();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.heroService.getTodoList()
      .subscribe(body => {
        console.log(body);
        this.todoList = body;
      });
  }

  addTodo() {
    this.heroService.addTodo(this.newTodo)
      .subscribe(body => {
        console.log(body);
        // 데이터를 todoList에 추가
        this.todoList.unshift(body);
        // inputbox 초기화
        this.newTodo.todo = null;
      });

  }
}
