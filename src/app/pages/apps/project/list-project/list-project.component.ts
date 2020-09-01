
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project.models';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { ProjectProfilService } from 'src/app/core/services/project.service';
import { User } from 'src/app/core/models/auth.models';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {

  dataSource : Project[];
  show = false;
  currentUser: User; 
manager: User;
  constructor(private projectService : ProjectService,  private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getAllProjects();
  }

  public getAllProjects = () => {
    console.log('aaaaaa');
    this.projectService.getlistProject()
    .subscribe(res => {
   //this.isLoading = false;

     this.dataSource = res as Project[];
      console.log(res);

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
  }

  goToAdd() {
    this.router.navigate(['add-project']);
  }
  goToHome() {
    this.router.navigate(['/']);
  }
  public deleteProject  = (id) => {
    this.projectService.delete(id)
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

  projectDetails ( id ){

    //this.router.navigate(['espace-administration/details/'+id]);
    this.router.navigate(['project-details/'+id]);
  }
}
