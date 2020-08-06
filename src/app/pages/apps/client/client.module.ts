import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../../../shared/ui/ui.module';
import { NgbTabsetModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ListClientComponent } from './list-client/list-client.component';
import { ClientRoutingModule } from './client-routing.module';
import { AddClientComponent } from './add-client/add-client.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClientDetailsComponent } from './client-details/client-details.component';



@NgModule({
    imports: [
        CommonModule,
        UIModule,
        ClientRoutingModule,
        NgbTabsetModule,
        NgbTooltipModule,
        NgbProgressbarModule,
        FormsModule, 
        ReactiveFormsModule
    ],
    declarations: [ListClientComponent, AddClientComponent, ClientDetailsComponent],
})

export class ClientModule { }