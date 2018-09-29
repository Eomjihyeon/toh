import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

// 1. (root 컴포넌트가 만들어질때) 해당 서비스를 컨테이너에 등록
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    // 네트워크를 통해서 모델 정보 획득
    return of(HEROES).pipe(delay(1000));
  }

  getHero(hero_id: number): Observable<Hero> {
    // 네트워크를 통해서 모델 정보 획득
    const h = HEROES.find(hero => hero.id === hero_id ? true : false);
    return of(h);
  }
}
