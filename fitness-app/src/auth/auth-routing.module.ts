
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login',  loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
            { path: 'register',  loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
        ]
    }
] as Routes;


