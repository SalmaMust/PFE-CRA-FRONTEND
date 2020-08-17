import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = this.authenticationService.currentUserValue;
        console.log('jwt intercept', currentUser);
        if (currentUser && currentUser.accessToken) {
            console.log('jwt intercept', currentUser.accessToken);
            request = request.clone({
                setHeaders: {
                    'Content-Type':  'application/json',
                    'Access-Control-Allow-Credentials' : 'true',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                    Authorization: `Bearer ${currentUser.accessToken}`
                    
                }
            });
        }

        return next.handle(request);
    }
}
