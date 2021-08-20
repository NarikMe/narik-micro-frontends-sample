import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<mat-card>{{ title }}</mat-card> `,
  styles: [],
})
export class AppComponent {
  title = 'user-profile';
}
