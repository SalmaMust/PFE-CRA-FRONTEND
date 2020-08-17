
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from 'src/app/core/models/task.models';
import { User } from 'src/app/core/models/auth.models';




@Injectable({
  providedIn: 'root'
})
export class TaskService {
task: Task;
currentUser: User; 
id: String;


  constructor(private http: HttpClient) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }


  public delete(id: string){
    return this.http.delete(`http://localhost:8000/api/tasks/${id}`);
  }

public createTask(client) {
  return this.http.post(`http://localhost:8000/api/task`, client);
} 
public getlistTask() {  
  console.log("api get all");
  if (this.currentUser.role === "User"){
     this.id = this.currentUser.id;
    return this.http.get<Task[]>(`http://localhost:8000/api/${this.id}/usertasks`);  
  }
  else
  { 
    return this.http.get<Task[]>(`http://localhost:8000/api/tasks`);
 }
 
  
}

public getTaskById(id: String){
  return this.http.get<Task>(`http://localhost:8000/api/tasks/${id}`);
}

}
