import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from 'src/auth/shared/services/auth/auth.service';


@Component({
    selector: 'app-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['app-header.component.scss'],
    templateUrl: 'app-header.component.html'
})

export class AppHeaderComponent implements OnInit {
    
    @Output()
    logout = new EventEmitter<any>();

    @Input()
    user: User

    constructor() { }

    ngOnInit() { }

    logoutUser() {
        this.logout.emit();
    }
}