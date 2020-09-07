import { User } from './auth/shared/services/auth/auth.service';

import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

export interface FitnessAppState {
    user: User;
    [key: string]: any;
}

const initalState: FitnessAppState = {
    user: undefined
};

export class Store {
    private subject = new BehaviorSubject<FitnessAppState>(initalState);
    private appState$: Observable<FitnessAppState> = this.subject.asObservable().pipe(distinctUntilChanged());

    get currentState(): FitnessAppState {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.appState$.pipe(pluck(name));
    }

    set(name: string, value: any): void {
        this.subject.next({ ...this.currentState, [name]: value });
    }
}
