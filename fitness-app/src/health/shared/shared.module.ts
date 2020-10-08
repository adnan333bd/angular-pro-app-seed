import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { MealsService } from './services/meals/meals.service';

// third party
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AngularFireDatabaseModule
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [MealsService]
        }
    }

}
