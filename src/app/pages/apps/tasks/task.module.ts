import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../../../shared/ui/ui.module';
import { NgbTabsetModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ListTaskComponent } from './list-task/list-task.component';
import { TaskRoutingModule } from './task-routing.module';
import { AddTaskComponent } from './add-task/add-task.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { KanbanboardComponent } from './kanbanboard/kanbanboard.component';
import { DndModule } from 'ngx-drag-drop';
import { NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        UIModule,
        TaskRoutingModule,
        NgbTabsetModule,
        NgbTooltipModule,
        NgbProgressbarModule,
        FormsModule, 
        ReactiveFormsModule,
        NgbDropdownModule,
        NgbCollapseModule,
        DndModule
    ],
    declarations: [ListTaskComponent, AddTaskComponent, TaskDetailsComponent,KanbanboardComponent],
})

export class TaskModule { }