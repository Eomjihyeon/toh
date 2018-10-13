import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hero} from '../hero';
import {environment} from '../../environments/environment';
import {ResultVo} from '../domain/result.vo';
import {Observable} from 'rxjs';

@Injectable()
export class AdminService {
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  addHero(hero: Hero): Observable<ResultVo> {
    return this.http.post<ResultVo>(`${environment.HOST}/api/hero`, hero,
      {headers: this.headers});
  }

  imageUpload(formData: FormData): Observable<ResultVo> {
    return this.http.post<ResultVo>(`http://eastflag.co.kr:8080/api/file`, formData);
  }
}
