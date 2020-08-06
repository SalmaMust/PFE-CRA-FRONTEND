

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/auth.models';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }


  
  getAll() {
    //return this.http.get<User[]>(`/api/login`);
    return this.http.get<User[]>(`http://localhost:8000/api/users`);
    //return null;
}
}