
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Absence } from 'src/app/core/models/absence.models';




@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
absence: Absence;


  constructor(private http: HttpClient) { }


  public delete(id: string){
    return this.http.delete(`http://localhost:8000/api/absences/${id}`);
  }

public createAbsence (absence) {
  return this.http.post(`http://localhost:8000/api/absence`, absence);
} 
public getlistAbsence() {

  console.log("api get all");
  

  return this.http.get<Absence[]>(`http://localhost:8000/api/absences`);
}

public getAbsenceById(id: String){
  return this.http.get<Absence>(`http://localhost:8000/api/absences/${id}`);
}
}

