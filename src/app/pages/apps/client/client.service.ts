import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/core/models/client.models';




@Injectable({
  providedIn: 'root'
})
export class ClientService {
client: Client;


  constructor(private http: HttpClient) { }

/*   private createCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}/${route}`;
  }

  public getData(route: string) {
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }*/

  public delete(id: string){
    return this.http.delete(`http://localhost:8000/api/clients/${id}`);
  }

public createClient (client) {
  return this.http.post(`http://localhost:8000/api/client`, client);
} 
public getlistClient() {

  console.log("api get all");
  

  return this.http.get<Client[]>(`http://localhost:8000/api/clients`);
}

public getClientById(id: String){
  return this.http.get<Client>(`http://localhost:8000/api/clients/${id}`);
}

}
