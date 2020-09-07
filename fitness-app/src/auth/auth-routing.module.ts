
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const AUTH_ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
            { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
        ]
    }
] as Routes;

@NgModule({
    imports: [RouterModule.forChild(AUTH_ROUTES)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }

