import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatListModule } from '@angular/material/list';

import { Router, RouterModule } from '@angular/router';
import { ShoppingCart } from 'shopping-lib';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      img.mat-list-icon {
        width: 50px;
        height: 50px;
      }
      mat-list{
        width: 250px;
      }
    `,
  ],
})
export class AppComponent {
  isOpen = false;

  constructor(private router: Router, public shoppingCart: ShoppingCart) {}

  navigateToCart() {
    this.router.navigate(['/shopping-cart']);
    this.isOpen = false;
  }
  navigateToHome() {
    this.router.navigate(['/']);
    this.isOpen = false;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forChild([]),
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    OverlayModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
