import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// auth routing
import { AuthRoutingModule } from './auth-routing.module';

// third-party models
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// shared module
import { SharedModule } from './shared/shared.module';


const firebaseConfig: FirebaseAppConfig = {
    apiKey: 'AIzaSyDPaqV3-sJ2IEF5JUhWON0KLtWvurJ3sIo',
    authDomain: 'fitness-app-775c0.firebaseapp.com',
    databaseURL: 'https://fitness-app-775c0.firebaseio.com',
    projectId: 'fitness-app-775c0',
    storageBucket: 'fitness-app-775c0.appspot.com',
    messagingSenderId: '710654031385',
    appId: '1:710654031385:web:352910baf2c92ecdc09c88',
    measurementId: 'G-3Q0BC7F9FL'
};

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule {
}
