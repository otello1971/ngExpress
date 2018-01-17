import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrudService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http
    .get(
      '/api',
      {
        observe: 'response',
        responseType: 'text',
        withCredentials: true
      });
  }

  get_logout(): Observable<any> {
    return this.http
    .get(
      '/api/tools/logout',
      {
        observe: 'response',
        withCredentials: true
      });
  }

  post_login_option(object, option): Observable<any> {
    return this.http
    .post(
        '/api/tools/' + option,
        object,
        {
          observe: 'response',
          responseType: 'json',
          withCredentials: true
        });
  }

  post(userToken): Observable<any> {
    return this.http
    .post(
      '/api',
      userToken,
      {
        observe: 'response',
        responseType: 'json',
        withCredentials: true
      });
  }



}
