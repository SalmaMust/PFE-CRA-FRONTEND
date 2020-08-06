import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../../../shared/ui/ui.module';
import { NgbTabsetModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ListTimesheetComponent } from './list-timesheet/list-timesheet.component';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



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
    declarations: [ListTimesheetComponent],
})

export class TimesheetModule { }