import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from 'store';
import { AuthService, User } from 'src/auth/shared/services/auth/auth.service';
import { Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `<div class="wrapper">
                <h1>{{user$ | async | json}}</h1>
                <router-outlet></router-outlet>
             </div>`
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'fitness app';
  authSub: Subscription;
  user$: Observable<User>;
  constructor(private store: Store, private authService: AuthService) {
  }

  ngOnInit() {
    this.authSub = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }
  ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}
