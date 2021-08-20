import { Component } from '@angular/core';
import { MicroFrontendsService } from '@narik/micro-frontends-infrastructure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public microFrontendsService: MicroFrontendsService) {
    this.microFrontendsService.loadAndInitializeDefaultApp('#content-root');
  }
}
