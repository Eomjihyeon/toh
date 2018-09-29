import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  //자식이 부모로 부터 데이터를 받는 방법 부모에게 받을때 자식 ts에서 @input 으로 부모의 데이터를 받는다 변수이름 : 부모
  @Input()
  selectedHero: Hero;

  //서비스, 생성자를 주입받는다 activateroute 현재 url에 대한 장보를 제공해주는 서비스 내장되어있어 주입반 받아서 쓸수있다 
  constructor(private route: ActivatedRoute) {
    this.route.params
      //parms는 observale의 객체 subscribe 한다
    //heros/:hero_id 의 hero_id 가 바뀔때마다 생성자는 한번만 호출
    // subscribe 콜백은 데이터가 들어올때마다 호출
      .subscribe(params => {
        console.log(params);
        //hero_id를 휙득 후 서비스를 통해서 데이터를 얻어서
        //selectedHero에 대입
      });
  }

  ngOnInit() {
  }

}
