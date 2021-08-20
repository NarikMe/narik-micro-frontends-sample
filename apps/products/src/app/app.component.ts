import { MicroFrontendsService } from '@narik/micro-frontends-infrastructure';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ShoppingCart } from 'shopping-lib';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styles: [],
})
export class AppComponent {
  products$?: Observable<Product[]>;
  private shoppingCart: ShoppingCart;
  constructor(
    productService: ProductService,
    microFrontendsService: MicroFrontendsService
  ) {
    this.products$ = productService.getProducts();
    this.shoppingCart = microFrontendsService.injector.get(ShoppingCart);
  }

  addToShoppingCart(product: Product) {
    this.shoppingCart.addProduct(product);
  }
}
