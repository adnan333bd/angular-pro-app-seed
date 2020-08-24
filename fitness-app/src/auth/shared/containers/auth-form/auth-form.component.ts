import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-auth-form',
    styleUrls: ['auth-form.component.scss'],
    templateUrl: 'auth-form.component.html'
})

export class AuthFormComponent implements OnInit {
    constructor() { }
    form: FormGroup;
    ngOnInit() { }
}
