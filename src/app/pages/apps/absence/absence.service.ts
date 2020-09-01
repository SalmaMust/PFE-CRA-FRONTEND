
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Absence } from 'src/app/core/models/absence.models';
import { User } from 'src/app/core/models/auth.models';




@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
absence: Absence;
currentUser: User; 
id: String;

  constructor(private http: HttpClient) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }


  public delete(id: string){
    return this.http.delete(`http://localhost:8000/api/absences/${id}`);
  }

public createAbsence (absence) {
  return this.http.post(`http://localhost:8000/api/absence`, absence);
} 
/* public getlistAbsence() {

  console.log("api get all");
  
  if (this.currentUser.role === "User"){
    this.id = this.currentUser.id;
      return this.http.get<Absence[]>(`http://localhost:8000/api/${this.id}/userabsences`);  
 }
  else
 {
     return this.http.get<Absence[]>(`http://localhost:8000/api/absences`);
 }
   
} */
public getlistAbsence() {

  console.log("api get all");
  
  if (this.currentUser.role === "User"||this.currentUser.role === "Manager"){
    this.id = this.currentUser.id;
      return this.http.get<Absence[]>(`http://localhost:8000/api/${this.id}/userabsences`);  
 }
  else
 {
     return this.http.get<Absence[]>(`http://localhost:8000/api/absences`);
 }
   
}

public getAbsenceById(id: String){
  return this.http.get<Absence>(`http://localhost:8000/api/absences/${id}`);
}


public getAbsenceByUserId(id: String){
  return this.http.get<Absence[]>(`http://localhost:8000/api/${id}/userabsences`);  
}
}

