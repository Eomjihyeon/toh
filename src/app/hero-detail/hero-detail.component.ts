import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  //자식이 부모로 부터 데이터를 받는 방법 부모에게 받을때 자식 ts에서 @input 으로 부모의 데이터를 받는다 변수이름 : 부모
  @Input()
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
