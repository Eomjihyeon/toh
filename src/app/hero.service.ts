import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Observable, of, Subject} from 'rxjs';
import {delay} from 'rxjs/operators';

// 1. (root 컴포넌트가 만들어질때) 해당 서비스를 컨테이너에 등록
// @ injectable()로 등록  등록 되는 시점이 필요할때 등록
// 2. 주입 생성자로 주입받는다
// observble정의 : 시간에 따른 stream of data
// observable 데이터 수신방법이다.  subscribe(callback);이 호출되서 데이터를 받을수있다!

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  refresh = new Subject<number>(); // publisher: next() 함수로 데이터 발생
  refresh$ = this.refresh.asObservable(); // subscriber: subscribe()로 데이터 수신

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    // 네트워크를 통해서 모델 정보 획득
    return of(HEROES);
  }

  getHero(hero_id: number): Observable<Hero> {
    // 네트워크를 통해서 모델 정보 획득
    const h = HEROES.find(hero => hero.id === hero_id ? true : false);
    return of(h);
  }
}
