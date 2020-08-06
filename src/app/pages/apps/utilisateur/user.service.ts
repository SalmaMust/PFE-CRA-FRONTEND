import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/core/models/auth.models';




@Injectable({
  providedIn: 'root'
})
export class UserService {
user: User;


  constructor(private http: HttpClient) { }

/*   private createCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}/${route}`;
  }

  public getData(route: string) {
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }*/

  public delete(id: string){
    return this.http.delete(`http://localhost:8000/api/users/${id}`);
  }

public createUser (user) {
  return this.http.post(`http://localhost:8000/api/user`, user);
} 
public getlistUser() {

  console.log("api get all");
  

  return this.http.get<User[]>(`http://localhost:8000/api/users`);
}

public getUserById(id: String){
  return this.http.get<User>(`http://localhost:8000/api/users/${id}`);
}

}
