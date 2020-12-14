import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from 'store';
import { AuthService, User } from 'src/auth/shared/services/auth/auth.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'fitness app';
  authSub: Subscription;
  user$: Observable<User>;

  constructor(
    private authService: AuthService,
    private store: Store,
    private router: Router) {
  }

  ngOnInit() {
    this.authSub = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['auth/login']);
  }

  ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}
