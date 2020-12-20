import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { tap } from 'rxjs/operators';

import { Store } from 'store';

export interface User {
    email: string;
    uid: string;
    authenticated: boolean;
}

@Injectable()
export class AuthService {

    sub_for_storing_user$ = this.angularFireAuth.authState.pipe(tap((next => {
        if (!next) {
            this.store.set('user', null);
            return;
        }
        const user: User = {
            email: next.email,
            uid: next.uid,
            authenticated: true
        };
        this.store.set('user', user);
    })));

    constructor(
        private angularFireAuth: AngularFireAuth,
        private store: Store
    ) { }

    get user_from_store$() {
        return this.store.select<User>('user');
    }

    get user_from_fb$() {
        return this.angularFireAuth.authState;
    }

    createUser(email: string, password): Promise<any> {
        return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
    }

    loginUser(email: string, password: string): Promise<any> {
        return this.angularFireAuth.signInWithEmailAndPassword(email, password);
    }

    logoutUser(): Promise<any> {
        return this.angularFireAuth.signOut();
    }
}
