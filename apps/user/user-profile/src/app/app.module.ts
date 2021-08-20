import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [ AppRoutingModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
