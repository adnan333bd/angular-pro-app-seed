import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AuthModule } from '../auth/auth.module';
import { Routes, RouterModule } from '@angular/router';
import { Store } from 'store';

// routes
export const ROUTES: Routes = [];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
