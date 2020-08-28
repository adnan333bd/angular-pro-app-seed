import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-auth-form',
    styleUrls: ['auth-form.component.scss'],
    templateUrl: 'auth-form.component.html'
})

export class AuthFormComponent implements OnInit {

    @Input()
    x: string;

    form = this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', Validators.required]
    });

    @Output()
    submitted = new EventEmitter();

    constructor(private fb: FormBuilder) { }


    ngOnInit(): void {

    }

    onSubmit(): void {
        if (this.form.valid) {
            this.submitted.emit(this.form.value);
        }
    }

    getControl(name: string): AbstractControl {
        return this.form.get('email');
    }

    get emailPatterError(): boolean {
        const emailCtrl = this.getControl('email');
        return emailCtrl.dirty && !this.emailRequiredError && emailCtrl.hasError('email');
    }

    get emailRequiredError(): boolean {
        return this.getCtrlRequiredError('email');
    }

    get passwordRequiredError(): boolean {
        return this.getCtrlRequiredError('password');
    }

    getCtrlRequiredError(name: string): boolean {
        const ctrl = this.getControl(name);
        return ctrl.dirty && ctrl.hasError('required');
    }
}
