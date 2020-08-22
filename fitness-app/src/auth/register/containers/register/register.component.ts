import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    template: `
        <div>
            Register
            <app-auth-form>
            </app-auth-form>
        </div>
    `
})

export class RegisterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}