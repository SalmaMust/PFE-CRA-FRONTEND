import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTimesheetComponent } from './list-timesheet/list-timesheet.component';
import { DetailTimesheetComponent } from './detail-timesheet/detail-timesheet.component';



const routes: Routes = [
    {
        path: 'list-timesheet',
        component: ListTimesheetComponent
    },
    
    {
        path: 'detail-timesheet',
        component: DetailTimesheetComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TimesheetRoutingModule { }
