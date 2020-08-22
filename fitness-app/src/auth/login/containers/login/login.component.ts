import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
        <div>
            Login
            <app-auth-form>
            </app-auth-form>
        </div>
    `
})

export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
