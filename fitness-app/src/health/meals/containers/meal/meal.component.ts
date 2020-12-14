import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/health/shared/services/meals/meals.service';

@Component({
    selector: 'app-meal-component',
    templateUrl: 'meal.component.html',
    styleUrls: ['meal.component.scss']
})
export class MealComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    addMeal(meal: Meal) {
        console.log(meal);
    }
}