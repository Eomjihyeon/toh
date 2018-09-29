import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from "../mock-heroes";
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero:Hero = {
    id: 1,
    name: 'Winstorm'
  };

  isSpecial = true;

  heroes: Hero[]; //배열타입임을 명시
  selectedHero: Hero;

//생성자로 이미 등록된 heroService 인스턴스를 주입받는다 hero.service.ts 에서 지정해준(주입하는곳) export class HeroService { 참고 주입받는곳
  constructor(private  heroService: HeroService) {
    // 의존성있게 코딩하는 경우 이렇게 안쓰는게 좋음
    // const heroServie = new HeroService();
    // this.heroes = heroServie.getHeroes();
    this.heroService.getHeroes()
      .subscribe(data => this.heroes = data);
  }

  ngOnInit() {

  }


  onSave(e: any){
    console.log(e);
    this.isSpecial = !this.isSpecial;
  }

  onSelected(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }

}
