import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleComponent } from './containers/schedule/schedule.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

export const ROUTES: Routes = [
    { path: '', component: ScheduleComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [ScheduleComponent],
    providers: [],
})
export class ScheduleModule { }
