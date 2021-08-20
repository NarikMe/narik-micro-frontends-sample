import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MicroFrontendsUiModule } from '@narik/micro-frontends-ui';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MicroFrontendsUiModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
