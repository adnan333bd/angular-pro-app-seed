import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealFormComponent } from './components/meal-form/meal-form.component';

import { MealsComponent } from './containers/meals/meals.component';
import { MealComponent } from './containers/meal/meal.component';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [
    { path: '', component: MealsComponent },
    { path: 'new', component: MealComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        MealsComponent,
        MealComponent,
        MealFormComponent
    ],
    providers: [],
})
export class MealsModule { }
