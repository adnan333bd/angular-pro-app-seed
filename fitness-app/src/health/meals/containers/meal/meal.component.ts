import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal, MealsService } from 'src/health/shared/services/meals/meals.service';

@Component({
    selector: 'app-meal-component',
    templateUrl: 'meal.component.html',
    styleUrls: ['meal.component.scss']
})
export class MealComponent implements OnInit {
    constructor(private mealsService: MealsService,
        private router: Router) { }

    ngOnInit() { }

    addMeal(meal: Meal) {
        this.mealsService.addMeal(meal);
        this.backToMeals();
    }

    backToMeals() {
        this.router.navigate(['/meals']);
    }
}