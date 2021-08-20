import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MicroFrontendsUiModule } from '@narik/micro-frontends-ui';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MicroFrontendsUiModule,
    RouterModule.forChild([]),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export { AppComponent } from './app.component';
