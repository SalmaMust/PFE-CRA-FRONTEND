
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/core/models/project.models';
import { User } from 'src/app/core/models/auth.models';




@Injectable({
  providedIn: 'root'
})
export class ProjectService {
project: Project;
currentUser: User;
id: String;


  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }



  public delete(id: string){
    return this.http.delete(`http://localhost:8000/api/projects/${id}`);
  }

public createProject (project) {
  return this.http.post(`http://localhost:8000/api/project`, project);
} 
public getlistProject() {

  console.log("api get all");
  if (this.currentUser.role == "Manager"){
    this.id = this.currentUser.id;
    return this.http.get<Project[]>(`http://localhost:8000/api/managerprojects/${this.id}`);
  } else {
    return this.http.get<Project[]>(`http://localhost:8000/api/projects`);
  }
    
}

public getProjectById(id: String){
  return this.http.get<Project>(`http://localhost:8000/api/projects/${id}`);
}

}
