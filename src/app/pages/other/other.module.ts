import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { FormsModule } from '@angular/forms';

import { ProjectModule } from '../apps/project/project.module';
import { NgbTabsetModule, NgbTooltipModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { StarterComponent } from './starter/starter.component';
import { ActivityComponent } from './activity/activity.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { Error500Component } from './error500/error500.component';
import { Error404Component } from './error404/error404.component';
import { ProfileModule } from './profile/profile.module';

@NgModule({
    imports: [
        CommonModule,
        OtherRoutingModule,
        UIModule,
        NgbTabsetModule,
        NgbTooltipModule,
        NgbProgressbarModule,
        ProjectModule,
        FormsModule,
     ProfileModule

    ],
    // tslint:disable-next-line: max-line-length
    declarations: [StarterComponent, ActivityComponent, InvoiceComponent, PricingComponent, Error500Component, Error404Component]
})

export class OtherModule { }
