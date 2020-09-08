import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: 'app-nav.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppNavComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}