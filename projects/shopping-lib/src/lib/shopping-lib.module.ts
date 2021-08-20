import { NgModule } from '@angular/core';
import { COMPONENTS } from './components/index';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [COMPONENTS],
  imports: [MatCardModule, MatButtonModule],
  exports: [COMPONENTS],
})
export class ShoppingLibModule {}
