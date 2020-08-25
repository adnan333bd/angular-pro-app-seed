import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    styleUrls: ['login.component.scss'],
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    login(event): void {
        console.log(event);
    }
}
