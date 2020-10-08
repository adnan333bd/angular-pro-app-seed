import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';

import { Meal, MealsService } from '../../../shared/services/meals/meals.service';

@Component({
    selector: 'app-meals',
    templateUrl: 'meals.component.html'
})

export class MealsComponent implements OnInit {
    subMeals: Subscription;
    meals$: Observable<Meal[]>;

    constructor(private mealsService: MealsService,
        private store: Store) { }

    ngOnInit() {
        this.meals$ = this.store.select<Meal[]>('meals');
        this.subMeals = this.mealsService.meals$.subscribe();
    }

    ngOnDestroy() {
        if (this.subMeals) {
            this.subMeals.unsubscribe();
        }
    }
}