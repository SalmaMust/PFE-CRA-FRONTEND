
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from 'src/app/core/models/client.models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  client: Client ;
  submitted: Boolean = false;
  
  constructor( private clientService: ClientService ,private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.getClientByid();
    
  }

  getClientByid(){
    const id: string = this.activeRoute.snapshot.params.id;
    this.clientService.getClientById(id)
    .subscribe( client => {
      this.client = client;
      console.log(client);
      
          }) ;
  }

  
  save(){
    console.log(this.client);
    
    this.clientService.createClient(this.client)
      .subscribe(data =>  console.log(data), error => console.log(error));
    this.client = new Client();
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/list-client']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}