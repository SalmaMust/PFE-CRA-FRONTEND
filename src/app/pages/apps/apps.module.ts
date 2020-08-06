import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';
import { AppsRoutingModule } from './apps-routing.module';

import { EmailModule } from './email/email.module';
import { ProjectModule } from './project/project.module';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CalendarComponent } from './calendar/calendar.component';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { ClientModule } from './client/client.module';
import { TimesheetModule } from './timesheet/timesheet.module';
import { TaskModule } from './tasks/task.module';

import { AbsenceModule } from './absence/absence.module';





@NgModule({
    declarations: [CalendarComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModalModule,
        FullCalendarModule,
        AppsRoutingModule,
        UIModule,
        EmailModule,
        ProjectModule,
        
        UtilisateurModule,
        ClientModule,
        TimesheetModule,
        TaskModule,
        AbsenceModule
    ]
})

export class AppsModule { }
