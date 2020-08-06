import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProjectComponent } from './list-project/list-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


const routes: Routes = [
    {
        path: 'project-list',
        component: ListProjectComponent
    },

    {
        path: 'add-project',
        component: AddProjectComponent
    },

    {
        path: 'project-details/:id',
        component: ProjectDetailsComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule { }
