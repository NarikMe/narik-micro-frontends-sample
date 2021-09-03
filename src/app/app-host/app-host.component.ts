import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AppInformation,
  MicroFrontendsService,
} from '@narik/micro-frontends-infrastructure';

@Component({
  selector: 'app-host',
  templateUrl: 'app-host.component.html',
})
export class AppHostComponent implements OnInit {
  app?: AppInformation;
  constructor(
    private route: ActivatedRoute,
    private microFrontendService: MicroFrontendsService,
    private element: ElementRef
  ) {}

  ngOnInit() {
    this.app = this.route.snapshot.data?.app;
    if (this.app) {
      this.microFrontendService.getApp(this.app.key).then((vueApp: any) => {
        vueApp.mount(this.element.nativeElement);
      });
    }
  }
}
