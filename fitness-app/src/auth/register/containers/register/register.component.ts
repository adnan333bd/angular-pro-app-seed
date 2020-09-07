import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/auth/shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})

export class RegisterComponent implements OnInit {
    title = 'Register';
    error = '';

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void { }

    async register(event: FormGroup): Promise<void> {
        const { email, password } = event.value;
        try {
            await this.authService.createUser(email, password);
            this.router.navigate(['/']);
        } catch (err) {
            this.error = err;
        }
    }
}
