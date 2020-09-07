import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthFormComponent } from './components/auth-form/auth-form.component';

// services
import { AuthService } from './services/auth/auth.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [AuthFormComponent],
    exports: [AuthFormComponent],
    providers: [AuthService]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [AuthService]
        };
    }
}

