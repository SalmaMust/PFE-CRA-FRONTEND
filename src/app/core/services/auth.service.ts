import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CookieService } from '../services/cookie.service';
import { User } from '../models/auth.models';

const AUTH_API = 'http://localhost:8000/api/auth';

const httpOptions = {
    headers: new HttpHeaders ({'Content-Type': 'application/json'})
  };

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    user: User;
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>

    constructor(private http: HttpClient, private cookieService: CookieService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }


    public get currentUserValue(): any{
        return this.currentUserSubject.value;
      }

    /**
     * Returns the current user
     */
/*     public currentUser(): User {
        if (!this.user) {
            this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
        }
        return this.user;
    } */

    /**
     * Performs the auth
     * @param username email of user
     * @param password password of user
     */
    login(username: string, password: string) {
        return this.http.post<any>(AUTH_API + `/login`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.accessToken) {
                    //this.user = user;
                    // store user details and jwt in cookie
                    //this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    console.log(localStorage);
                }
                return user;
            }));
    }

    /**
     * Logout the user
     */
    logout() {
        // remove user from local storage to log user out
        /* this.cookieService.deleteCookie('currentUser');
        this.user = null; */
        localStorage.removeItem('currentUser');
        console.log("hello logout");
        this.currentUserSubject.next(null);
    }
}

