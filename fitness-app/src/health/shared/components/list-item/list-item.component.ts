import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-list-item',
    templateUrl: 'list-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListItemComponent implements OnInit {

    toggled = false;

    @Input()
    item: any;

    @Output()
    remove = new EventEmitter<any>();

    constructor() { }

    ngOnInit() { }

    toggle() {
        this.toggled = !this.toggled;
    }

    removeItem() {
        this.remove.emit();
    }

    getRoute(item: any) {
        return [`../meals`, item.$key];
    }
}