import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../../../shared/ui/ui.module';
import { NgbTabsetModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListTimesheetComponent } from './list-timesheet/list-timesheet.component';
import { DetailTimesheetComponent } from './detail-timesheet/detail-timesheet.component';
import { AddTimesheetComponent } from './add-timesheet/add-timesheet.component';



@NgModule({
    imports: [
        CommonModule,
        UIModule,
        TimesheetRoutingModule,
        NgbTabsetModule,
        NgbTooltipModule,
        NgbProgressbarModule,
        FormsModule, 
        ReactiveFormsModule
    ],
    declarations: [ListTimesheetComponent, DetailTimesheetComponent, AddTimesheetComponent],
})

export class TimesheetModule { }