import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// component
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';

// containers
import { AppComponent } from './containers/app/app.component';

// app routing
import { AppRoutingModule } from './app-routing.module';

// feature module
import { AuthModule } from '../auth/auth.module';

import { Store } from 'store';



@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
