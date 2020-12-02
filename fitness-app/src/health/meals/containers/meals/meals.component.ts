import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';

import { Meal, MealsService } from '../../../shared/services/meals/meals.service';

@Component({
    selector: 'app-meals',
    templateUrl: 'meals.component.html'
})

export class MealsComponent implements OnInit, OnDestroy {
    subMeals: Subscription;
    meals$: Observable<Meal[]>;

    constructor(private mealsService: MealsService,
        private store: Store) { }

    ngOnInit() {
        this.subMeals = this.mealsService.meals$.subscribe();
        this.meals$ = this.store.select<Meal[]>('meals');
    }

    ngOnDestroy() {
        if (this.subMeals) {
            this.subMeals.unsubscribe();
        }
    }
}