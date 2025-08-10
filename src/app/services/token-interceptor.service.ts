import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { get } from 'es-toolkit/compat';
import { Injectable } from '@angular/core';
import { Observable, from, switchMap } from 'rxjs';

import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class TokenInteceptorService implements HttpInterceptor {

  constructor(private readonly authService: AuthService) {
  }


  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // 1. Get the current session (handles token refresh)
    return from(this.authService.getSession()).pipe(

      switchMap((session) => {
        const accessToken = get( session, "tokens.accessToken", "");
        // const idToken = session.tokens?.idToken; // Using the ID token can be useful in some scenarios, but be cautious about sensitive information

        // 2. Clone the request and add the Authorization header if an access token exists
        if (accessToken) {
          const authReq = request.clone({
            setHeaders: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          return next.handle(authReq);
        }

        // 3. If no access token, proceed with the original request
        return next.handle(request);
      }),
    );
  }

}
