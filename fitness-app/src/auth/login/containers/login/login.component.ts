import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-login',
    styleUrls: ['login.component.scss'],
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    error: string;
    title = 'Login';
    constructor() { }

    ngOnInit(): void { }

    login(event): void {
        console.log(event);
    }
}
