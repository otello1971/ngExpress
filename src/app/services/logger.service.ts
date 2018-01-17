import 'rxjs/add/operator/do';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class LoggerService implements HttpInterceptor {
  // constructor(private auth: AuthService) {}

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next
      .handle(req)
      .do(event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      });
  }
}
