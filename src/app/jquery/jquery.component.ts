import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.scss']
})
export class JqueryComponent implements OnInit {
  todoList;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getTodoList();
  }
//자바스크립트 코드
  getTodoList() {
    $.ajax({
      url: 'http://www.javabrain.kr:8080/api/todo',
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log(data);
        this.todoList = data;
         this.refresh();
      }
    });
  }

//empty로 몽땅 다 지운다음에 하나하나 붙일수밖에 없다.
  refresh() {
    console.log('refresh');
    $('#todo_list').empty();

    this.todoList.forEach(function(item, index) {
      const todo =
        '<tr>' +
        '<td>' +
        (item.isFinished ? '완료' : '미완료') +
        '</td>' +
        (item.isFinished ? '<td style="text-decoration: line-through">' : '<td>') + item.todo + '</td>' +
        '<td>' + item.created + '</td>' +
        '<td>' + item.updated + '</td>' +
        '<td>' +
        '<button type="button">삭제</button>' +
        '</td>' +
        '</tr>';
      $('#todo_list').append(todo);
      //다시 append 로 하나하나씩 모드를 만들고 붙인다
    });
  }
}
