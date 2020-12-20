import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// guards
import { AuthGuard } from 'src/auth/shared/guards/auth.guard';

// shared module
import { HealthSharedModule } from './shared/health-shared.module';

export const ROUTES: Routes = [
    { path: 'meals', canActivate: [AuthGuard], loadChildren: () => import('./meals/meals.module').then(m => m.MealsModule) },
    { path: 'schedule', canActivate: [AuthGuard], loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule) },
    { path: 'workouts', canActivate: [AuthGuard], loadChildren: () => import('./workouts/workouts.module').then(m => m.WorkoutsModule) }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        HealthSharedModule.forRoot()
    ]
})
export class HealthModule { }
