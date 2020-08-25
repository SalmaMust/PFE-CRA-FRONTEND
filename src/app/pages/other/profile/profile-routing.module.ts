import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { DetailProfileComponent } from './detail-profile/detail-profile.component';

const routes: Routes = [
    {
        path: 'pages-profile',
        component: ProfileComponent
    },


    {
        path: 'profile-details/:id',
        component: DetailProfileComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
