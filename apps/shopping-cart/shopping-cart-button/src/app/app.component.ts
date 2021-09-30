import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { NavigationService } from '@narik/micro-frontends-infrastructure';
import { ShoppingCart } from 'shopping-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      img.mat-list-icon {
        width: 50px;
        height: 50px;
      }
      mat-list {
        width: 250px;
      }
    `,
  ],
})
export class AppComponent {
  isOpen = false;

  constructor(
    private router: Router,
    public shoppingCart: ShoppingCart,
    private navigationService: NavigationService
  ) {}

  checkout() {
    this.navigationService.navigate('checkout');
    this.isOpen = false;
  }
  navigateToProducts() {
    this.navigationService.navigate('products');
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
