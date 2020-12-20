import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, share, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from 'src/auth/shared/services/auth/auth.service';
import { Store } from 'store';

export interface Meal {
    name: string;
    ingredients: string[];
    timestamp: number;
    $key: string;
    $exists: () => boolean;
}

@Injectable()
export class MealsService {


    constructor(private store: Store,
        private db: AngularFireDatabase,
        private authService: AuthService) { }


    get meals$(): Observable<Meal[]> {
        return this.authService.user_from_store$
            .pipe(
                switchMap(user => this.db.list(`meals/${user.uid}`).valueChanges()),
                tap(next => this.store.set('meals', next)),
                share()
            ) as Observable<Meal[]>;
    }

    addMeal(meal: Meal) {
        const user = this.authService.user_from_store$.pipe(take(1)).subscribe(user => {
            this.db.list(`meals/${user.uid}`).push(meal);
        });
    }

}