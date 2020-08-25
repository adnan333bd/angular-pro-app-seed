import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `<div class="wrapper">
                <router-outlet></router-outlet>
             </div>`
})
export class AppComponent {
  title = 'fitness app';
}
