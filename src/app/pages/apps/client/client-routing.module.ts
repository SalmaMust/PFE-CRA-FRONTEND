import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListClientComponent } from './list-client/list-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';



const routes: Routes = [
    {
        path: 'list-client',
        component: ListClientComponent
    },

    {
        path: 'add-client',
        component: AddClientComponent
    },

    {
        path: 'client-details/:id',
        component: ClientDetailsComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }
