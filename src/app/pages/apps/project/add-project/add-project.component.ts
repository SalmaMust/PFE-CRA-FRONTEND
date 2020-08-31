import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from 'src/app/core/models/project.models';
import { Router } from '@angular/router';
import { ClientService } from '../../client/client.service';
import { Client } from 'src/app/core/models/client.models';
import { UserService } from '../../utilisateur/user.service';
import { User } from 'src/app/core/models/auth.models';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  project: Project = new Project();
   clients : Client[];
   managers : User[];

  submitted = false;

  constructor(private userService: UserService, private projectService: ProjectService, private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    //this.clients=this.clientService.getlistClient()
    this.getAllClients();
    this.getAllManagers();
    console.log(this.clients);
  }

  newUser(): void {
    this.submitted = false;
    this.project = new Project();
  }
  goToHome() {
    this.router.navigate(['/']);
  }
  save(){
    console.log(this.project);
    
    this.projectService.createProject(this.project)
      .subscribe(data =>  console.log(data), error => console.log(error));
    this.project = new Project();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/project-list']);
  }

  public getAllClients = () => {
    console.log('clients in projects');
    this.clientService.getlistClient()
    .subscribe(res => {
   //this.isLoading = false;

     this.clients = res as Client[];
      console.log(res);

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
  }

  public getAllManagers = () => {
    console.log('managers');
    this.userService.getlistManagers()
    .subscribe(res => {
   //this.isLoading = false;

     this.managers = res as User[];
      console.log(res);

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
  }

}

