import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from 'src/app/core/models/client.models';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  formCreateEvent: FormGroup;

  client: Client = new Client();
  submitted = false;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
  }

  newClient(): void {
    this.submitted = false;
    this.client = new Client();
  }
  goToHome() {
    this.router.navigate(['/']);
  }
  save(){
    console.log(this.client);
    
    this.clientService.createClient(this.client)
      .subscribe(data =>  console.log(data), error => console.log(error));
    this.client = new Client();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/list-client']);
  }
  

}