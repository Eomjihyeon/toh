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

    });
  }


  add_todo() {
    $.ajax({
      url: 'http://www.javabrain.kr:8080/api/todo',
      method: 'POST',
      data: JSON.stringify({todo: $('#input_todo').val(), isFinished: false}),
      contentType: 'application/json',
      dataType: 'json',
      success: data => {
        this.todoList.unshift(data);
        //뷰생성
      const todo =
        '<tr>' +
        '<td>' +
        (data.isFinished ? '완료' : '미완료') +
        '</td>' +
        (data.isFinished ? '<td style="text-decoration: line-through">' : '<td>') + data.todo + '</td>' +
        '<td>' + data.created + '</td>' +
        '<td>' + data.updated + '</td>' +
        '<td>' +
        '<button type="button">삭제</button>' +
        '</td>' +
        '</tr>';
    $('#todo_list').prepend(todo);
// input clear
        $('#input_todo').val('');
      }
    });
  }
}
