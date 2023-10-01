import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class ContactHttpInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes("/authentification/login")) {
      let newRequest = request.clone({
          headers: request.headers.set('Authorization', 'Bearer ' + this.authService.accessToken)
        }
      );
      return next.handle(newRequest).pipe(
        catchError(err => {
          if(err.status ==401){
            this.authService.logout();
          }
          return throwError(err.message);
        })
      );
    } else {
      return next.handle(request);
    }
  }
}
