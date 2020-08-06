import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../../../shared/ui/ui.module';
import { NgbTabsetModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListAbsenceComponent } from './list-absence/list-absence.component';
import { AddAbsenceComponent } from './add-absence/add-absence.component';
import { AbsenceDetailsComponent } from './absence-details/absence-details.component';
import { AbsenceRoutingModule } from './absence-routing.module';




@NgModule({
    imports: [
        CommonModule,
        UIModule,
        AbsenceRoutingModule,
        NgbTabsetModule,
        NgbTooltipModule,
        NgbProgressbarModule,
        FormsModule, 
        ReactiveFormsModule
    ],
    declarations: [ListAbsenceComponent, AddAbsenceComponent, AbsenceDetailsComponent],
})

export class AbsenceModule { }