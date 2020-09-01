import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../../../shared/ui/ui.module';
import { NgbTabsetModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';
import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EmployeeComponent } from './employee/employee.component';



@NgModule({
    imports: [
        CommonModule,
        UIModule,
        UtilisateurRoutingModule,
        NgbTabsetModule,
        NgbTooltipModule,
        NgbProgressbarModule,
        FormsModule, 
        ReactiveFormsModule
    ],
    declarations: [ListUtilisateurComponent, AddUserComponent, UserDetailsComponent, EmployeeComponent],
})

export class UtilisateurModule { }