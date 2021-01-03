import { User } from './auth/shared/services/auth/auth.service';

import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Meal } from './health/shared/services/meals/meals.service';

export interface FitnessAppState {
    user: User;
    meals: Meal[];
    [key: string]: any;
}

const initalState: FitnessAppState = {
    user: undefined,
    meals: undefined
};

export class Store {
    private subject = new BehaviorSubject<FitnessAppState>(initalState);
    private appState$: Observable<FitnessAppState> = this.subject.asObservable().pipe(distinctUntilChanged());

    get currentState(): FitnessAppState {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.appState$.pipe(pluck(name), distinctUntilChanged());
    }

    set(name: string, value: any): void {
        console.log('setting ', name);
        this.subject.next({ ...this.currentState, [name]: value });
    }
}
