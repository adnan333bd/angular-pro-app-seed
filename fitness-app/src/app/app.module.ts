import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/containers/app/app.component';

// feature modules
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* var firebaseConfig = {
  apiKey: "AIzaSyDPaqV3-sJ2IEF5JUhWON0KLtWvurJ3sIo",
  authDomain: "fitness-app-775c0.firebaseapp.com",
  databaseURL: "https://fitness-app-775c0.firebaseio.com",
  projectId: "fitness-app-775c0",
  storageBucket: "fitness-app-775c0.appspot.com",
  messagingSenderId: "710654031385",
  appId: "1:710654031385:web:352910baf2c92ecdc09c88",
  measurementId: "G-3Q0BC7F9FL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
 */