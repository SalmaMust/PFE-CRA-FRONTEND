
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Absence } from 'src/app/core/models/absence.models';
import { User } from 'src/app/core/models/auth.models';
import { Task } from 'src/app/core/models/task.models';
import { Project } from 'src/app/core/models/project.models';




@Injectable({
  providedIn: 'root'
})
export class ProfileService {
absence: Absence;
currentUser: User; 
id: String;

  constructor(private http: HttpClient) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }


public getlistAbsence() {

  console.log("api get all");
  
 {
    this.id = this.currentUser.id;
      return this.http.get<Absence[]>(`http://localhost:8000/api/${this.id}/userabsences`);  
 }
 
   
}
public getlistProject() {

    console.log("api get all");
    
   {
      this.id = this.currentUser.id;
        return this.http.get<Project[]>(`http://localhost:8000/api/${this.id}/userprojects`);  
   }
   
     
  }
public getlistTask() {

    console.log("api get all");
    
   {
      this.id = this.currentUser.id;
        return this.http.get<Task[]>(`http://localhost:8000/api/${this.id}/usertasks`);  
   }
   
     
  }
}