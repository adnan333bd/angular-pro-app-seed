import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { MealsService } from './services/meals/meals.service';

// third party
import { AngularFireDatabaseModule } from '@angular/fire/database';

//
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AngularFireDatabaseModule
    ],
    exports: [
        ListItemComponent
    ],
    declarations: [
        ListItemComponent
    ],
    providers: [],
})
export class HealthSharedModule {
    static forRoot(): ModuleWithProviders<HealthSharedModule> {
        return {
            ngModule: HealthSharedModule,
            providers: [MealsService]
        }
    }

}
