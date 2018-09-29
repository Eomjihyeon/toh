import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

//root 컴포넌트가 만들어질때 해당 서비스를 컨테이너에 등록(heroes.component.ts에서 사용) constructor(private  heroService: HeroService) {
@Injectable({
  providedIn: 'root'
})
export class HeroService {
// 리턴 타입을 명시  : Hero[]
  constructor() { }
  getHeroes(): Hero[] {
    //네트워크를 통해서 모델 정보 휙득
    return HEROES;
  }


}
