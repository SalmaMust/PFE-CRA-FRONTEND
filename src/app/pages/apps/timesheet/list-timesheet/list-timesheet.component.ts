import { Component, OnInit } from '@angular/core';
import { TimesheetService } from '../timesheet.service';
import { Timesheet } from 'src/app/core/models/timesheet.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-timesheet',
  templateUrl: './list-timesheet.component.html',
  styleUrls: ['./list-timesheet.component.scss']
})
export class ListTimesheetComponent implements OnInit {

  dataSource : Timesheet[];

  constructor(private timesheetService: TimesheetService, private router: Router) { }

  ngOnInit() {
    this.getAllTimesheets();
  }

  public getAllTimesheets = () => {
    console.log('times');
    this.timesheetService.getlistTimesheet()
    .subscribe(res => {
   //this.isLoading = false;

     this.dataSource = res as Timesheet[];
      console.log(res);

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
  }

  timesheetDetails ( id ){

    //this.router.navigate(['espace-administration/details/'+id]);
    this.router.navigate(['detail-timesheet/'+id]);
  }
}