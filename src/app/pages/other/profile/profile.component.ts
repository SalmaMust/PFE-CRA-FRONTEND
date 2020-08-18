import { Component, OnInit } from '@angular/core';

import {  activities } from './data';

import {  Activity } from './profile.model';
import { Absence } from 'src/app/core/models/absence.models';
import { AbsenceService } from '../../apps/absence/absence.service';
import { ProjectService } from '../../apps/project/project.service';
import { Project } from 'src/app/core/models/project.models';
import { TaskService } from '../../apps/tasks/task.service';
import { Task } from 'src/app/core/models/task.models';
import { UserService } from '../../apps/utilisateur/user.service';
import { User } from 'src/app/core/models/auth.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
/**
 * Profile-component - handling profile with sidenav-content
 */
export class ProfileComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  activities: Activity[];
  DATA : Task[];
  dataSource : Absence[];
  data : Project[];  
  user: User ;
  currentUser: User; 
  id: String;

  constructor(private userService : UserService,private taskService : TaskService,private activeRoute: ActivatedRoute, private router: Router,private projectService : ProjectService,private absenceService : AbsenceService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Pages', path: '/' }, { label: 'Profile', active: true }];

    this._fetchData();
    this.getAllAbsences();
    this.getAllProjects();
    this.getAllTasks();
 this.getUserByid();
    
  }

  getUserByid(){
    const id: string = this.currentUser.id;
    this.userService.getUserById(id)
    .subscribe( user => {
      this.user = user;
      console.log(user);
      
          }) ;
  }
  userDetails ( id ){

    //this.router.navigate(['espace-administration/details/'+id]);
    this.router.navigate(['user-details/'+id]);
  }
  public getAllAbsences = () => {
    console.log('aaaaaa');
    this.absenceService.getlistAbsence()
    .subscribe(res => {
   //this.isLoading = false;

     this.dataSource = res as Absence[];
      console.log(res);

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
  }
  public getAllTasks = () => {
    console.log('aaaaaa');
    this.taskService.getlistTask()
    .subscribe(res => {
   //this.isLoading = false;

     this.DATA = res as Task[];
      console.log(res);

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
  }
  public getAllProjects = () => {
    console.log('aaaaaa');
    this.projectService.getlistProject()
    .subscribe(res => {
   //this.isLoading = false;

     this.data = res as Project[];
      console.log(res);

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
  }
  /**
   * Fetches the data
   */
  private _fetchData() {
    this.activities = activities;
  }
}