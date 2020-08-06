import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client.models';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { ClientProfilService } from 'src/app/core/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  dataSource : Client[];

  constructor(private clientService : ClientService,  private router: Router) { }

  ngOnInit() {
    this.getAllClients();
  }

  public getAllClients = () => {
    console.log('aaaaaa');
    this.clientService.getlistClient()
    .subscribe(res => {
   //this.isLoading = false;

     this.dataSource = res as Client[];
      console.log(res);

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
  }

  goToAdd() {
    this.router.navigate(['add-client']);
  }

  public deleteClient  = (id) => {
    this.clientService.delete(id)
    .subscribe(res => {
   //this.isLoading = false;

  /*    this.dataSource.find(id) = res as User[];
    console.log(res); */

    this.dataSource.forEach(
      (item, index) => {
        if(item.id == id)
        this.dataSource.splice(index, 1);
      }
    );

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
  }

  clientDetails ( id ){

    this.router.navigate(['client-details/'+id]);
  }
}

