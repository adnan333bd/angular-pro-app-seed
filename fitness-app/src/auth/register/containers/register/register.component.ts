import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})

export class RegisterComponent implements OnInit {
    title = 'Register';
    error = '';
    constructor() { }

    ngOnInit(): void { }

    register(event): void {
        console.log(event);
    }
}
