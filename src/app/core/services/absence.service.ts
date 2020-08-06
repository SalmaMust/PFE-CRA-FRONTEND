
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Absence } from '../models/absence.models';

@Injectable({ providedIn: 'root' })
export class AbsenceProfilService {
    constructor(private http: HttpClient) { }

    

    getAll() {
        return this.http.get<Absence[]>(`http://localhost:8000/api/absences`);
        //return null;
    }
}