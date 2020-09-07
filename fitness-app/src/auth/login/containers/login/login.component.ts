import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/auth/shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    styleUrls: ['login.component.scss'],
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    error: string;
    title = 'Login';
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void { }

    async login(event: FormGroup): Promise<void> {
        const { email, password } = event.value;
        try {
            this.error = '';
            await this.authService.loginUser(email, password);
            this.router.navigate(['/']);
        } catch (err) {
            this.error = err;
        }
    }
}
