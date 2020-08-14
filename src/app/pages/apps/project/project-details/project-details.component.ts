import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project, Widget } from 'src/app/core/models/project.models';
import { Router } from '@angular/router';
import { ClientService } from '../../client/client.service';
import { Client } from 'src/app/core/models/client.models';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project ;
  clients : Client[];
  submitted: Boolean = false;

  constructor( private projectService: ProjectService , private clientService: ClientService,private activeRoute: ActivatedRoute, private router: Router) { }

  

    /**
     * Fetches the project data
     */
  
 
  ngOnInit(): void {

    this.getProjectByid();
    this.getAllClients();
    console.log(this.clients);

  }
 
  getProjectByid(){
    const id: string = this.activeRoute.snapshot.params.id;
    this.projectService.getProjectById(id)
    .subscribe( project => {
      this.project = project;
      console.log(project);
      
          }) ;
  }

  save(){
    console.log(this.project);
    
    this.projectService.createProject(this.project)
      .subscribe(data =>  console.log(data), error => console.log(error));
    this.project = new Project();
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/project-list']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
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
}