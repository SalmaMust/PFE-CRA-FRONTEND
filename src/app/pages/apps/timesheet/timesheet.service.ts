import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/core/models/auth.models';
import { Timesheet } from 'src/app/core/models/timesheet.models';
import { Internal } from 'src/app/core/models/internal.models';
import { Production } from 'src/app/core/models/production.models';




@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
timesheet: Timesheet;


  constructor(private http: HttpClient) { }

/*   private createCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}/${route}`;
  }

  public getData(route: string) {
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }*/

/*   public delete(id: string){
    return this.http.delete(`http://localhost:8000/api/users/${id}`);
  } */

/* public createUser (user) {
  return this.http.post(`http://localhost:8000/api/user`, user);
}  */
public getlistTimesheet() {

  console.log("api get all timesheets");
  

  return this.http.get<Timesheet[]>(`http://localhost:8000/api/timesheet/all`);
}

/* public getlistManagers() {

  console.log("api get managers");
  

  return this.http.get<User[]>(`http://localhost:8000/api/managers`);
}*/

public getTimesheetById(id: String){
  return this.http.get<Timesheet>(`http://localhost:8000/api/timesheet/${id}`);
}

public getInternByTimesheetId(id: String){
  return this.http.get<Internal[]>(`http://localhost:8000/api/timesheet/${id}/intern`);
}

public getProductionByTimesheetId(id: String){
  return this.http.get<Production[]>(`http://localhost:8000/api/timesheet/${id}/production`);
}

}
