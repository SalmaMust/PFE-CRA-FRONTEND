import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Client } from '../models/client.models';

@Injectable({ providedIn: 'root' })
export class ClientProfilService {
    constructor(private http: HttpClient) { }

    

    getAll() {
        //return this.http.get<User[]>(`/api/login`);
        return this.http.get<Client[]>(`http://localhost:8000/api/clients`);
        //return null;
    }
}