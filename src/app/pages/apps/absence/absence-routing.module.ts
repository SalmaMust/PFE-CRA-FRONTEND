import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAbsenceComponent } from './list-absence/list-absence.component';
import { AddAbsenceComponent } from './add-absence/add-absence.component';
import { AbsenceDetailsComponent } from './absence-details/absence-details.component';



const routes: Routes = [
    {
        path: 'list-absence',
        component: ListAbsenceComponent
    },

    {
        path: 'add-absence',
        component: AddAbsenceComponent
    },

    {
        path: 'absence-details/:id',
        component: AbsenceDetailsComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AbsenceRoutingModule { }
