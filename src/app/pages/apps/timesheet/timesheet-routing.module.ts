import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTimesheetComponent } from './list-timesheet/list-timesheet.component';
import { DetailTimesheetComponent } from './detail-timesheet/detail-timesheet.component';
import { AddTimesheetComponent } from './add-timesheet/add-timesheet.component';



const routes: Routes = [
    {
        path: 'list-timesheet',
        component: ListTimesheetComponent
    },
    
    {
        path: 'detail-timesheet/:id',
        component: DetailTimesheetComponent
    },
    
    {
        path: 'app-add-timesheet',
        component: AddTimesheetComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TimesheetRoutingModule { }
