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
  userData : User[];
  activities: Activity[];
  DATA : Task[];
  dataSource : Absence[];
  data : Project[];  

  public currentUser: User; 

  constructor(private userService : UserService,private taskService : TaskService,private projectService : ProjectService,private absenceService : AbsenceService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Pages', path: '/' }, { label: 'Profile', active: true }];

    this._fetchData();
    this.getAllAbsences();
    this.getAllProjects();
    this.getAllTasks();

  }
  public getAllUsers = () => {
    console.log('aaaaaa');
    this.userService.getlistUser()
    .subscribe(res => {
   //this.isLoading = false;

     this.userData = res as User[];
      console.log(res);

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
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