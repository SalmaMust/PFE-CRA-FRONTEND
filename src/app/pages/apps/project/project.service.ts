
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/core/models/project.models';




@Injectable({
  providedIn: 'root'
})
export class ProjectService {
project: Project;


  constructor(private http: HttpClient) { }



  public delete(id: string){
    return this.http.delete(`http://localhost:8000/api/projects/${id}`);
  }

public createProject (project) {
  return this.http.post(`http://localhost:8000/api/project`, project);
} 
public getlistProject() {

  console.log("api get all");
  

  return this.http.get<Project[]>(`http://localhost:8000/api/projects`);
}

public getProjectById(id: String){
  return this.http.get<Project>(`http://localhost:8000/api/projects/${id}`);
}

}
