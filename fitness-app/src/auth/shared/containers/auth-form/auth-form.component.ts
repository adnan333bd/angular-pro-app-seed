import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-auth-form',
    styleUrls: ['auth-form.component.scss'],
    templateUrl: 'auth-form.component.html'
})

export class AuthFormComponent implements OnInit {
    form = this.fb.group({
        email: '',
        password: ''
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
}
