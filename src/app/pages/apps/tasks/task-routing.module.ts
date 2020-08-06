import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTaskComponent } from './list-task/list-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { KanbanboardComponent } from './kanbanboard/kanbanboard.component';



const routes: Routes = [
    {
        path: 'list-task',
        component: ListTaskComponent
    },

    {
        path: 'add-task',
        component: AddTaskComponent
    },

    {
        path: 'task-details/:id',
        component: TaskDetailsComponent
    },
     {
        path: 'task-board',
        component: KanbanboardComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskRoutingModule { }
