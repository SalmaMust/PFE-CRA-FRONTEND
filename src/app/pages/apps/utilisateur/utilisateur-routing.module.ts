import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
    {
        path: 'utilisateur-list',
        component: ListUtilisateurComponent
    },

    {
        path: 'add-user',
        component: AddUserComponent
    },

    {
        path: 'user-details/:id',
        component: UserDetailsComponent
    },

    {
        path: 'app-employee/:id',
        component: EmployeeComponent
    }

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
