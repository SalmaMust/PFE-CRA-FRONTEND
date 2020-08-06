
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from 'src/app/core/models/task.models';




@Injectable({
  providedIn: 'root'
})
export class TaskService {
task: Task;



  constructor(private http: HttpClient) { }


  public delete(id: string){
    return this.http.delete(`http://localhost:8000/api/tasks/${id}`);
  }

public createTask(client) {
  return this.http.post(`http://localhost:8000/api/task`, client);
} 
public getlistTask() {

  console.log("api get all");
  

  return this.http.get<Task[]>(`http://localhost:8000/api/tasks`);
}

public getTaskById(id: String){
  return this.http.get<Task>(`http://localhost:8000/api/tasks/${id}`);
}

}
