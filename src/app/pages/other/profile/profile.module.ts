import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgbTabsetModule, NgbTooltipModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { DetailProfileComponent } from './detail-profile/detail-profile.component';

@NgModule({
    imports: [
        CommonModule,
        UIModule,
        ProfileRoutingModule,
        NgbTabsetModule,
        NgbTooltipModule,
        NgbProgressbarModule,
        FormsModule, 
        ReactiveFormsModule
    ],
    declarations: [ProfileComponent, DetailProfileComponent],
})

export class ProfileModule { }