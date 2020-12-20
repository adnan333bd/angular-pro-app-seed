import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-item',
    templateUrl: 'list-item.component.html'
})

export class ListItemComponent implements OnInit {
    @Input()
    item: any;
    constructor() { }

    ngOnInit() { }
}