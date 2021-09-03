import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import {
  App,
  AppHandler,
  AppInformation,
  AppLoader,
} from '@narik/micro-frontends-infrastructure';
import { AppHostComponent } from './app-host/app-host.component';

@Injectable()
export class VueAppHandler extends AppHandler {
  constructor(private router: Router, private appLoader: AppLoader) {
    super();
  }

  get key(): string {
    return 'vue-app';
  }

  initialize(
    app: AppInformation<
      any,
      { type: string; module: string; path?: string },
      any
    >,
    loadedApp: any,
    parameters: { [key: string]: any },
    injector: Injector
  ): Promise<App> {
    this.router.config.push({
      path: app.handle.path ?? app.key,
      component: AppHostComponent,
      data: {
        app,
      },
    });
    return Promise.resolve({});
  }

  activate(
    app: AppInformation<
      any,
      { type: string; creator: string; path?: string },
      any
    >,
    loadedApp: any,
    parameters: { [key: string]: any },
    injector: Injector
  ) {
    const vueApp = loadedApp[app.handle.creator]();
    return Promise.resolve(vueApp);
  }
}
