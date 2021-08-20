import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [
    `
      .example-spacer {
        flex: 1 1 auto;
      }
      .container {
        margin: 30px;
      }

      mat-toolbar {
        position: sticky;
        position: -webkit-sticky; /* For macOS/iOS Safari */
        top: 0; /* Sets the sticky toolbar to be on top */
        z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */
      }
    `,
  ],
})
export class AppComponent {
  title = 'shell';
}
