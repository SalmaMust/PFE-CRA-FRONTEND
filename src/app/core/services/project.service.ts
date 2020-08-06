import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from '../models/project.models';

@Injectable({ providedIn: 'root' })
export class ProjectProfilService {
    constructor(private http: HttpClient) { }

    

    getAll() {
        return this.http.get<Project[]>(`http://localhost:8000/api/projects`);
        //return null;
    }
}