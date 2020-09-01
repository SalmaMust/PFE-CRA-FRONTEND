import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/core/models/auth.models';

import { Absence } from 'src/app/core/models/absence.models';
import { Activity } from 'src/app/pages/other/profile/profile.model';
import { Task } from 'src/app/core/models/task.models';
import { activities } from 'src/app/pages/other/profile/data';
import { TaskService } from '../../tasks/task.service';
import { AbsenceService } from '../../absence/absence.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Timesheet } from 'src/app/core/models/timesheet.models';
import { TimesheetService } from '../../timesheet/timesheet.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  activities: Activity[];
  DATA : Task[];
  dataSource : Absence[];
  data : Timesheet[];
  user: User ;
  currentUser: User; 
  id: String;
  constructor(private timesheetService: TimesheetService,private userService : UserService,private taskService : TaskService,private activeRoute: ActivatedRoute, private router: Router,private absenceService : AbsenceService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

   }

  ngOnInit() {
    this.getAllTimesheets();

    this._fetchData();
    this.getAllAbsences();
    this.getAllTasks();
 this.getUserByid();
    
  }
  
  public getAllTimesheets = () => {
    const id: string = this.activeRoute.snapshot.params.id;

    console.log('times');
    this.timesheetService.getTimesheetByUserId(id)
    .subscribe(res => {
   //this.isLoading = false;

     this.data = res as Timesheet[];
      console.log("timesheet",res);


    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
  }
  getUserByid(){
    const id: string = this.currentUser.id;
    this.userService.getUserById(id)
    .subscribe( user => {
      this.user = user;
      console.log(user);
      
          }) ;
  }
  private _fetchData() {
    this.activities = activities;
  }
  profileDetails ( id ){

    //this.router.navigate(['espace-administration/details/'+id]);
    this.router.navigate(['profile-details/'+id]);
  }
  public getAllAbsences = () => {
    const id: string = this.activeRoute.snapshot.params.id;

    console.log('aaaaaa');
    this.absenceService.getAbsenceByUserId(id)
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
    const id: string = this.activeRoute.snapshot.params.id;

    console.log('aaaaaa');
    this.taskService.gettasksByUserId(id)
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
  

}
