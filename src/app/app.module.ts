import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MicroFrontendsCoreModule } from '@narik/micro-frontends-core';
import { AppHandler, MicroFrontendsService } from '@narik/micro-frontends-infrastructure';
import { AppHostComponent } from './app-host/app-host.component';
import { AppComponent } from './app.component';
import { VueAppHandler } from './vue-app-handler.service';

@NgModule({
  declarations: [AppComponent, AppHostComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    MicroFrontendsCoreModule.forRoot({}),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeMicroFrontendsService,
      deps: [MicroFrontendsService],
      multi: true,
    },
    {
      provide: AppHandler,
      useClass: VueAppHandler,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function initializeMicroFrontendsService(
  microFrontendsService: MicroFrontendsService
): () => Promise<void> {
  return () => microFrontendsService.initialize();
}
