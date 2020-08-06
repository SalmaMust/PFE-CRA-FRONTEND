import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../../../shared/ui/ui.module';
import { NgbTabsetModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListProjectComponent } from './list-project/list-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import {ProjectRoutingModule} from './project-routing.module';



@NgModule({
    imports: [
        CommonModule,
        UIModule,
        ProjectRoutingModule,
        NgbTabsetModule,
        NgbTooltipModule,
        NgbProgressbarModule,
        FormsModule, 
        ReactiveFormsModule
    ],
    declarations: [ListProjectComponent, AddProjectComponent, ProjectDetailsComponent],
})

export class ProjectModule { }