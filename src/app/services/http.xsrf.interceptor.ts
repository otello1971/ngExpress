import { Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpXsrfTokenExtractor} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpXsrfInterceptor implements HttpInterceptor {

  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headerName = 'x_xsrf_token';
    const token = this.tokenExtractor.getToken() as string;
    if (token !== null && !req.headers.has(headerName)) {
      req = req.clone({ headers: req.headers.set(headerName, token) });
    }
    console.log('HttpXsrfInterceptor working ... ' + token);
    return next.handle(req);
  }
}




