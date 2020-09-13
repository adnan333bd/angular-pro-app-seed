import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealsComponent } from './containers/meals/meals.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

export const ROUTES: Routes = [
    { path: '', component: MealsComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [MealsComponent],
    providers: [],
})
export class MealsModule { }
