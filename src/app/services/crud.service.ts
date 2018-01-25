import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrudService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http
    .get(
      '/api/tools',
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
        responseType: 'json',
        withCredentials: true
      });
  }

  post_login_option(loginObject: Login, option): Observable<any> {
    return this.http
    .post(
        '/api/tools/' + option,
        loginObject,
        {
          // headers: new HttpHeaders().set('Authorization', 'Basic ' + authToken ),
          observe: 'response',
          responseType: 'json',
          withCredentials: true
        });
  }

  post(userToken): Observable<any> {
    return this.http
    .post(
      '/api/tools',
      userToken,
      {
        observe: 'response',
        responseType: 'json',
        withCredentials: true
      });
  }



}
