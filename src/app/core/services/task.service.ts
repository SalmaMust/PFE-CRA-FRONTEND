
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../models/task.models';

@Injectable({ providedIn: 'root' })
export class TaskProfileService {
    constructor(private http: HttpClient) { }

    

    getAll() {
        //return this.http.get<User[]>(`/api/login`);
        return this.http.get<Task[]>(`http://localhost:8000/api/tasks`);
        //return null;
    }
}